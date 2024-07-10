from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_restful import Api
from flask_jwt_extended import JWTManager
from resources import UserRegister, UserLogin, NewsPost, NewsPostList, UserProfile

app = Flask(__name__)
app.config.from_object('config.Config')

db = SQLAlchemy(app)
api = Api(app)
jwt = JWTManager(app)

@app.before_first_request
def create_tables():
    db.create_all()

# Routes
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(NewsPost, '/post/<int:post_id>')
api.add_resource(NewsPostList, '/posts')
api.add_resource(UserProfile, '/profile')

if __name__ == '__main__':
    app.run(debug=True)
