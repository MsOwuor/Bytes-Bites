from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object('dbconfig.Config')

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)

    with app.app_context():
        from routes import UserRegister, UserLogin, NewsPost, NewsPostList, UserProfile
        # Register your resources
        app.add_url_rule('/register', view_func=UserRegister.as_view('register'))
        app.add_url_rule('/login', view_func=UserLogin.as_view('login'))
        app.add_url_rule('/posts/<int:post_id>', view_func=NewsPost.as_view('post'))
        app.add_url_rule('/posts', view_func=NewsPostList.as_view('posts'))
        app.add_url_rule('/profile', view_func=UserProfile.as_view('profile'))

        db.create_all()

    return app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
