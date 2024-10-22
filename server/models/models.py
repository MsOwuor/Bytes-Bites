from  server.extensions import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
        __tablename__ = 'users'
        id = db.Column(db.Integer, primary_key=True)
        email = db.Column(db.String(120), unique=True, nullable=False)
        password_hash = db.Column(db.String(128))
        posts = db.relationship('Post', backref='author', lazy=True)  # One user to many posts

        # Method to set the password
        def set_password(self, password):
            self.password_hash = generate_password_hash(password)

        # Method to check the password
        def check_password(self, password):
            return check_password_hash(self.password_hash, password)
        

class Post(db.Model):
        __tablename__ = 'posts'
        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String(255), nullable=False)
        body = db.Column(db.Text, nullable=False)
        likes = db.Column(db.Integer, default=0)
        user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
        comments = db.relationship('Comment', backref='post', lazy=True)

class Comment(db.Model):
        __tablename__ = 'comments'
        id = db.Column(db.Integer, primary_key=True)                                         
        post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
        text = db.Column(db.Text, nullable=False)
