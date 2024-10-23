from flask import Flask
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
from server.extensions import db, bcrypt, jwt  # Updated import
from flask_migrate import Migrate
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('APP_SECRET_KEY')
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///site.db'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["JWT_SECRET_KEY"] = os.getenv('JWT_SECRET_KEY')

# Initialize extensions
db.init_app(app)  # Initialize with app
bcrypt.init_app(app)  # Initialize with app
jwt.init_app(app)  # Initialize with app
migrate = Migrate(app, db)
CORS(app)
api = Api(app)

def register_resources(api):
    from server.resources import (
        UserRegister, UserLogin, NewsPostResource, NewsPostListResource, UserProfileResource,
        RecipeResource, RecipeListResource, PostResource, PostListResource, CommentResource
    )

    api.add_resource(UserRegister, '/register')
    api.add_resource(UserLogin, '/login')
    api.add_resource(NewsPostResource, '/news/<int:post_id>')
    api.add_resource(NewsPostListResource, '/news')
    api.add_resource(UserProfileResource, '/profile')
    api.add_resource(RecipeResource, '/recipes/<int:recipe_id>')
    api.add_resource(RecipeListResource, '/recipes')
    api.add_resource(PostResource, '/posts/<int:post_id>')
    api.add_resource(PostListResource, '/posts')
    api.add_resource(CommentResource, '/posts/<int:post_id>/comments')

register_resources(api)

if __name__ == '__main__':
    app.run(debug=True)
