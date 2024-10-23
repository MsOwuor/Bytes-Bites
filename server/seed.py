from dbconfig import db, app
from models import Recipe

# Create all tables
with app.app_context():
    db.create_all()

    # Clear existing data from the Recipe table
    db.session.query(Recipe).delete()

    # Seed recipes
    recipes = [
        {
            'title': 'Beef Pilau',
            'total_time': '1 hr 15 min',
            'prep_time': '15 min',
            'cook_time': '1 hr',
            'ingredients': '''
                PILAU MASALA
                2 teaspoons ground cumin
                1 tablespoon paprika
                1 teaspoon ground cardamom
                1 teaspoon black pepper
                ¼ teaspoon ground cloves

                PILAU
                ¼ cup vegetable oil(60 mL)
                2 medium red onions, thinly sliced
                4 cloves garlic, minced
                2 tablespoons ginger, minced
                1 serrano chile, finely chopped
                1 tablespoon pilau masala
                2 beef stock cubes
                1 cinnamon stick
                ¼ cup fresh cilantro(10 g), roughly chopped
                1 lb beef sirloin(455 g), cubed
                3 tomatoes, diced
                1 lb potato(455 g), waxy, peeled and cut into 1 inch (2 cm) chunks
                4 cups water(960 mL)
                2 cups basmati rice(400 g)
            ''',
            'preparation': '''
                1. Make the pilau masala: In a medium bowl, combine the cumin, paprika, cardamom, black pepper, and cloves. Set aside.
                2. Heat a large pot over medium-high heat. Add the oil and red onion and sauté for 10-15 minutes, until dark brown.
                3. Add the garlic, ginger, serrano chile, pilau masala, beef stock cubes, cinnamon stick, and cilantro. Cook for 1-2 minutes, until fragrant.
                4. Add the beef and cook until browned, about 8 minutes.
                5. Add the tomatoes and cook for 4-5 minutes, until the tomatoes have released their liquid.
                6. Add the potatoes and the water. Bring to a boil and cook for 10 minutes.
                7. Add the rice, stir, and cover. Reduce the heat to medium-low and cook for 20 minutes, until the rice is cooked and the liquid is absorbed.
            ''',
            'image_url': 'client/public/masala.jpeg',
            'user_id': 1  # Assuming you have a user with ID 1
        },
        {
            'title': 'Beef Matoke',
            'total_time': '1 hr',
            'prep_time': '20 min',
            'cook_time': '40 min',
            'ingredients': '''
                5 – 8 green bananas
                250 grams beef cubed
                3 tomatoes cut into cubes
                1 onion, chopped
                1/2 cup of coriander, chopped
                1 tablespoon salt
                1/2 cup of cooking vegetable oil
                1 teaspoon black pepper
                1 teaspoon paprika
                1/4 cup of curry powder
            ''',
            'preparation': '''
                1. Apply oil on your hands and peel the bananas to prevent your hands from getting sticky
                2. Place the bananas in a bowl of water with salt to prevent the bananas from turning dark
                3. In a cooking pot boil the meat by adding one cup of water and let it boil for about 20 minutes or until it’s tender
                4. Add cooking oil to the meat and let it cook as you stir
                5. Add the onions and let it cook for about three minutes. Add the tomatoes and paprika, stir and let them simmer until the tomatoes soften
                6. Add the bananas to the beef and stir. Add water, salt, coriander, black pepper and curry powder and let it simmer until the bananas are soft
            ''',
            'image_url': 'client/public/pilaubeef.jpeg',
            'user_id': 1  # Assuming you have a user with ID 1
        },
        # Add more recipes as needed
    ]

    for recipe_data in recipes:
        recipe = Recipe(**recipe_data)
        db.session.add(recipe)

    db.session.commit()

    print('Database seeded successfully.')
