from app import db

class Recipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    total_time = db.Column(db.String(50))
    prep_time = db.Column(db.String(50))
    cook_time = db.Column(db.String(50))
    ingredients = db.Column(db.Text)
    directions = db.Column(db.Text)
    image_url = db.Column(db.String(255))

    def __repr__(self):
        return f"<Recipe {self.title}>"
