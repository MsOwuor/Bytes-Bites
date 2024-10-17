from app import db

class User(db.Model):
        __tablename__ = 'users'
        id = db.Column(db.Integer, primary_key=True)
        email = db.Column(db.String(120), unique=True, nullable=False)
        password_hash = db.Column(db.String(128))

        # Method to set the password
        def set_password(self, password):
        # Implement your password hashing logic here (e.g., using bcrypt)
            pass

        # Method to check the password
        def check_password(self, password):
        # Implement your password checking logic here
            pass

class Post(db.Model):
        __tablename__ = 'posts'
        id = db.Column(db.Integer, primary_key=True)
        title = db.Column(db.String(255), nullable=False)
        body = db.Column(db.Text, nullable=False)
        likes = db.Column(db.Integer, default=0)
        comments = db.relationship('Comment', backref='post', lazy=True)

class Comment(db.Model):
        __tablename__ = 'comments'
        id = db.Column(db.Integer, primary_key=True)                                         
        post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
        text = db.Column(db.Text, nullable=False)
