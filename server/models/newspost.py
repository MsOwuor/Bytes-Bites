from server.extensions import db

class NewsPost(db.Model):
    __tablename__ = 'news_posts'  # Changed to use plural
    __table_args__ = {'extend_existing': True} 

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    body = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
