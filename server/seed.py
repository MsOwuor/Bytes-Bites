from server import db, create_app
from server.models import User, NewsPost

def seed_db():
    app = create_app()
    with app.app_context():
        db.drop_all()
        db.create_all()

        user1 = User(email='user1@example.com')
        user1.set_password('password1')
        user2 = User(email='user2@example.com')
        user2.set_password('password2')

        db.session.add(user1)
        db.session.add(user2)
        db.session.commit()

        post1 = NewsPost(title='From Code to Cuisine: Glowing Reviews of Our IT Chef',
                         content='Discover the innovative fusion of technology and culinary arts with our IT Chef. Read glowing reviews from our customers.',
                         user_id=user1.id)
        post2 = NewsPost(title='Gourmet Meets Geek: Customer Testimonials for Our IT Chef',
                         content='See what our customers are saying about the unique blend of gourmet cooking and tech-savvy skills of our IT Chef.',
                         user_id=user2.id)

        db.session.add(post1)
        db.session.add(post2)
        db.session.commit()

if __name__ == '__main__':
    seed_db()
