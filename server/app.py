from resources import UserRegister, UserLogin, UserProfileResource
from resources import NewsPostResource, NewsPostListResource, PostListResource, PostResource, CommentResource, CommentResource
from resources import RecipeResource, RecipeListResource
from dbconfig import api, app

api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')
api.add_resource(UserProfileResource, '/profile')
api.add_resource(NewsPostListResource, '/news')
api.add_resource(NewsPostResource, '/news/<int:post_id>')
api.add_resource(PostListResource, '/posts')
api.add_resource(PostResource, '/posts/<int:post_id>')
api.add_resource(CommentResource, '/posts/<int:post_id>/comments')
api.add_resource(RecipeListResource, '/recipes')
api.add_resource(RecipeResource, '/recipes/<int:recipe_id>')

if __name__ == '__main__':
    app.run(debug=True)