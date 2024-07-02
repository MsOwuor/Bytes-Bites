from flask import Blueprint
from app.services import recommendation_service

bp = Blueprint('recommendation', __name__, url_prefix='/api')

@bp.route('/recommendations', methods=['GET'])
def get_recommendations():
    return recommendation_service.get_recommendations()

