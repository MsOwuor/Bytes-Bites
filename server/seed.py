from app import create_app, db
from models import User, NewsPost

def seed_db():
    app = create_app()

    with app.app_context():
        # Create some users
        user1 = User(email='user1@example.com')
        user1.set_password('password1')

        user2 = User(email='user2@example.com')
        user2.set_password('password2')

        db.session.add(user1)
        db.session.add(user2)

        # Create some news posts
        post1 = NewsPost(title='First Post', content='Content of first post.', user=user1)
        post2 = NewsPost(title='Second Post', content='Content of second post.', user=user2)

        db.session.add(post1)
        db.session.add(post2)

        db.session.commit()

if __name__ == '__main__':
    seed_db()
