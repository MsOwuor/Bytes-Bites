from flask import jsonify
from app.models.recommendation import Recommendation
from app import db

def get_recommendations():
    recommendations = Recommendation.query.all()
    return jsonify([{"id": rec.id, "recipe": rec.recipe} for rec in recommendations])

