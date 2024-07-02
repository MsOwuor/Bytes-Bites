from flask import Blueprint, request, jsonify
from app.services import blog_service

bp = Blueprint('blog', __name__, url_prefix='/api')

@bp.route('/blog', methods=['GET'])
def get_blog_posts():
    return blog_service.get_blog_posts()

@bp.route('/blog', methods=['POST'])
def create_blog_post():
    data = request.json
    return blog_service.create_blog_post(data)

