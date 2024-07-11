from flask import jsonify
from app.models.blog_post import BlogPost
from app import db

def get_blog_posts():
    posts = BlogPost.query.all()
    return jsonify([{"id": post.id, "title": post.title, "content": post.content} for post in posts])

def create_blog_post(data):
    new_post = BlogPost(title=data['title'], content=data['content'])
    db.session.add(new_post)
    db.session.commit()
    return jsonify({"message": "Blog post created", "post": {"id": new_post.id, "title": new_post.title, "content": new_post.content}})

