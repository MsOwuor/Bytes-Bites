from app import db

class Recommendation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    recipe = db.Column(db.String(100), nullable=False)

