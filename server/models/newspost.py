from server.extensions import db

class NewsPost(db.Model):
    __tablename__ = 'newsposts'  # Changed to use plural
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
