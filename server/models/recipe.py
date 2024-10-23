from server.extensions import db

class Recipe(db.Model):
    __tablename__ = 'recipes'  
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False, index=True)
    total_time = db.Column(db.String, nullable=True)
    prep_time = db.Column(db.String, nullable=True)
    cook_time = db.Column(db.String, nullable=True)
    ingredients = db.Column(db.Text, nullable=False)
    preparation = db.Column(db.Text, nullable=False)
    image_url = db.Column(db.String(255), nullable=True)

    def __repr__(self):
        return f"<Recipe {self.title}>"
