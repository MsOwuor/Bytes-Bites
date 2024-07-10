from flask import request
from flask_restful import Resource
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token
from models.user import User
from models.newspost import NewsPost
from models.recipe import Recipe
from dbconfig import db

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

class NewsPostListResource(Resource):
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

class UserProfileResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user = User.query.get_or_404(user_id)
        posts = [{'id': post.id, 'title': post.title, 'content': post.content} for post in user.posts]
        return {'email': user.email, 'posts': posts}

class RecipeResource(Resource):
    @jwt_required()
    def get(self, recipe_id):
        recipe = Recipe.query.get_or_404(recipe_id)
        return {
            'id': recipe.id,
            'title': recipe.title,
            'total_time': recipe.total_time,
            'prep_time': recipe.prep_time,
            'cook_time': recipe.cook_time,
            'ingredients': recipe.ingredients,
            'preparation': recipe.preparation,
            'image_url': recipe.image_url
        }

    @jwt_required()
    def post(self):
        data = request.get_json()
        recipe = Recipe(
            title=data['title'],
            total_time=data.get('total_time'),
            prep_time=data.get('prep_time'),
            cook_time=data.get('cook_time'),
            ingredients=data['ingredients'],
            preparation=data['preparation'],
            image_url=data.get('image_url')
        )
        db.session.add(recipe)
        db.session.commit()
        return {'message': 'Recipe created successfully'}, 201

    @jwt_required()
    def put(self, recipe_id):
        data = request.get_json()
        recipe = Recipe.query.get_or_404(recipe_id)
        if recipe.user_id != get_jwt_identity():
            return {'message': 'You are not authorized to update this recipe'}, 403
        recipe.title = data['title']
        recipe.total_time = data.get('total_time')
        recipe.prep_time = data.get('prep_time')
        recipe.cook_time = data.get('cook_time')
        recipe.ingredients = data['ingredients']
        recipe.preparation = data['preparation']
        recipe.image_url = data.get('image_url')
        db.session.commit()
        return {'message': 'Recipe updated successfully'}

    @jwt_required()
    def delete(self, recipe_id):
        recipe = Recipe.query.get_or_404(recipe_id)
        if recipe.user_id != get_jwt_identity():
            return {'message': 'You are not authorized to delete this recipe'}, 403
        db.session.delete(recipe)
        db.session.commit()
        return {'message': 'Recipe deleted successfully'}

class RecipeListResource(Resource):
    @jwt_required()
    def get(self):
        recipes = Recipe.query.all()
        return [{
            'id': recipe.id,
            'title': recipe.title,
            'total_time': recipe.total_time,
            'prep_time': recipe.prep_time,
            'cook_time': recipe.cook_time,
            'ingredients': recipe.ingredients,
            'preparation': recipe.preparation,
            'image_url': recipe.image_url
        } for recipe in recipes]

