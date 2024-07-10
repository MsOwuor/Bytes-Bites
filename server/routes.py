from flask import Blueprint, request
from flask_restful import Api, Resource
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .models import User, NewsPost, db

bp = Blueprint('main', __name__)
api = Api(bp)

class UserRegister(Resource):
    def post(self):
        data = request.get_json()
        if User.query.filter_by(email=data['email']).first():
            return {'message': 'User already exists'}, 400

        user = User(email=data['email'])
        user.set_password(data['password'])
        db.session.add(user)
        db.session.commit()
        return {'message': 'User created successfully'}, 201

class UserLogin(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(email=data['email']).first()
        if user and user.check_password(data['password']):
            access_token = create_access_token(identity=user.id)
            return {'access_token': access_token}, 200
        return {'message': 'Invalid credentials'}, 401

class NewsPostResource(Resource):
    @jwt_required()
    def get(self, post_id):
        post = NewsPost.query.get_or_404(post_id)
        return {'title': post.title, 'content': post.content, 'user_id': post.user_id}

    @jwt_required()
    def put(self, post_id):
        data = request.get_json()
        post = NewsPost.query.get_or_404(post_id)
        if post.user_id != get_jwt_identity():
            return {'message': 'You are not authorized to update this post'}, 403
        post.title = data['title']
        post.content = data['content']
        db.session.commit()
        return {'message': 'Post updated successfully'}

    @jwt_required()
    def delete(self, post_id):
        post = NewsPost.query.get_or_404(post_id)
        if post.user_id != get_jwt_identity():
            return {'message': 'You are not authorized to delete this post'}, 403
        db.session.delete(post)
        db.session.commit()
        return {'message': 'Post deleted successfully'}

class NewsPostList(Resource):
    @jwt_required()
    def get(self):
        posts = NewsPost.query.all()
        return [{'id': post.id, 'title': post.title, 'content': post.content, 'user_id': post.user_id} for post in posts]

    @jwt_required()
    def post(self):
        data = request.get_json()
        user_id = get_jwt_identity()
        post = NewsPost(title=data['title'], content=data['content'], user_id=user_id)
        db.session.add(post)
        db.session.commit()
        return {'message': 'Post created successfully'}, 201

class UserProfile(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user = User.query.get_or_404(user_id)
        posts = [{'id': post.id, 'title': post.title, 'content': post.content} for post in user.posts]
        return {'email': user.email, 'posts': posts}

# Registering routes
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(NewsPostList, '/posts')
api.add_resource(NewsPostResource, '/posts/<int:post_id>')
api.add_resource(UserProfile, '/profile')
