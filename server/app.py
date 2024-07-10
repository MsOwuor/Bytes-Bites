from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)
    app.config.from_object('dbconfig.Config')
    
    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    
    with app.app_context():
        from routes import api_bp
        app.register_blueprint(api_bp)
        
        db.create_all()
    
    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
