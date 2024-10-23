from  server.extensions import db
from werkzeug.security import generate_password_hash, check_password_hash

class User(db.Model):
        __tablename__ = 'user'
        __table_args__ = {'extend_existing': True}  

        id = db.Column(db.Integer, primary_key=True)
        email = db.Column(db.String(120), unique=True, nullable=False)
        password_hash = db.Column(db.String(128))
        posts = db.relationship('NewsPost', backref='author', lazy=True)  # One user to many posts

        # Method to set the password
        def set_password(self, password):
            self.password_hash = generate_password_hash(password)

        # Method to check the password
        def check_password(self, password):
            return check_password_hash(self.password_hash, password)
        

class NewsPost(db.Model):
        __tablename__ = 'news_posts'
        __table_args__ = {'extend_existing': True} 
        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String(200), nullable=False)
        body = db.Column(db.Text, nullable=False)
        user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
        

class Comment(db.Model):
        __tablename__ = 'comments'
        id = db.Column(db.Integer, primary_key=True)                                         
        post_id = db.Column(db.Integer, db.ForeignKey('news_post.id'), nullable=False)
        text = db.Column(db.Text, nullable=False)


