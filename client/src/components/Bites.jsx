import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  SimpleGrid,
  Spinner,
  Image,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Bites = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('title'); // Default sort by title
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6); // Number of recipes per page

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const response = [
          {
            title: 'Beef Pilau',
            total_time: '1 hr 15 min',
            prep_time: '15 min',
            cook_time: '1 hr',
            ingredients: `
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
            `,
            preparation_steps: `
              1. Make the pilau masala: In a medium bowl, combine the cumin, paprika, cardamom, black pepper, and cloves. Set aside.
              2. Heat a large pot over medium-high heat. Add the oil and red onion and sauté for 10-15 minutes, until dark brown.
              3. Add the garlic, ginger, serrano chile, pilau masala, beef stock cubes, cinnamon stick, and cilantro. Cook for 1-2 minutes, until fragrant.
              4. Add the beef and cook until browned, about 8 minutes.
              5. Add the tomatoes and cook for 4-5 minutes, until the tomatoes have released their liquid.
              6. Add the potatoes and the water. Bring to a boil and cook for 10 minutes.
              7. Add the rice, stir, and cover. Reduce the heat to medium-low and cook for 20 minutes, until the rice is cooked and the liquid is absorbed.
            `,
            image_url: 'https://res.cloudinary.com/drdradtyj/image/upload/v1720686558/masala_zvbsmb.jpg',
          },
          {
            title: 'Beef Matoke',
            total_time: '1 hr 30 min',
            prep_time: '30 min',
            cook_time: '1 hr',
            ingredients: `
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
            `,
            preparation_steps: `
              1. Apply oil on your hands and peel the bananas to prevent your hands from getting sticky
              2. Place the bananas in a bowl of water with salt to prevent the bananas from turning dark
              3. In a cooking pot boil the meat by adding one cup of water and let it boil for about 20 minutes or until it’s tender
              4. Add cooking oil to the meat and let it cook as you stir
              5. Add the onions and let it cook for about three minutes. Add the tomatoes and paprika, stir and let them simmer until the tomatoes soften
              6. Add the bananas to the beef and stir. Add water, salt, coriander, black pepper and curry powder and let it simmer until the bananas are soft
            `,
            image_url: 'https://res.cloudinary.com/drdradtyj/image/upload/v1720686558/beefmatoke_g7cqwo.jpg',
          },
          {
            title: 'Chicken and Green Pea Stew',
            total_time: '45 min',
            prep_time: '15 min',
            cook_time: '30 min',
            ingredients: `
              2 chicken breasts
              1 onion
              2 cups frozen peas
              2 carrots
              3 cloves of garlic
              3 cups chicken stock
              ¼ teaspoon salt
              ⅛ teaspoon ground black pepper
              2 tablespoon chopped fresh dill
              2 tablespoon oil
              1 tablespoon tomato puree
            `,
            preparation_steps: `
              1. Peel and chop the onion, carrots and garlic.
              2. Cut the chicken into chunks, season with salt and pepper.
              3. Add half of the amount of oil to a large cooking pan, and cook the chicken on both sides for 2-3 minutes until no longer pink.
              4. Remove from the pan and set aside.
              5. Heat up the other half of oil, add the onion, and fry until golden.
              6. Add the garlic, carrots, cooked chicken, peas and stock, give it a stir, place the lid on the pan, and leave to cook until the veggies are tender and the chicken is cooked through.
              7. Add the tomato paste, check for seasoning and garnish with fresh dill.
            `,
            image_url: 'https://res.cloudinary.com/drdradtyj/image/upload/v1720686558/chickenpea_ifszts.jpg',
          },
          {
            title: 'Sticky Pork Ribs with Mango BBQ Sauce',
            total_time: '2 hr 45 min',
            prep_time: '24 hr marination',
            cook_time: '2.5 hr',
            ingredients: `
              For marination:
              750 g of pork baby back ribs
              3 cloves of garlic, minced
              1 heaped tablespoon of minced ginger
              1/4 teaspoon of chili flakes
              1 teaspoon of dried thyme / 3 sprigs of fresh thyme
              2 tablespoons of soy sauce
              4 tablespoons of honey

              To season:
              1 tablespoon of coriander spice
              1 tablespoon of smoked paprika
              1 teaspoon of onion powder
              1/2 teaspoon of cumin

              For the mango bbq sauce:
              1 mango cheek, pureed
              1/2 red onion, finely chopped
              1/4 cup of chopped chives
              1 tablespoon of minced ginger
              1 teaspoon of minced garlic
              250g of ketchup
              2 tablespoons of soy sauce
              1/4 teaspoon of chili flakes
              2 tablespoons of honey
            `,
            preparation_steps: `
              1. Before setting out to marinate, ensure you peel off the silver membrane off of the back of the ribs so that the flavors really absorb.
              2. Begin by marinating the meat: place all the marination ingredients in a bowl and mix until combined
              3. Pour them onto your rack of ribs and slather until coated
              4. Cover and let this marinate for 6 – 48 hours. Remember, the longer you marinate your meat, the deeper the flavors sink in.
              5. Slice the rack into individual ribs and place in a bowl.
              6. Combine the four spices for seasoning and then pour onto the ribs and rub them in.
              7. place them your baking pan and cover with foil – shiny side up. Be sure to enclose the edges of the foil well so that moisture does not escape as they bake.
              8. Allow them to bake for 2.5 – 3 hours at 170c.
              9. Peel your mango and puree it with a hand blender until smooth.
              10. In your sufuria, add in the chives, onion, ginger and garlic. Sautee until softened and fragrant.
              11. Add in your ketchup, honey, the pureed mango soy sauce and chili. Mix it all up and allow this to simmer on low heat for about 10 minutes.
              12. After the pork ribs are done cooking, take them from the oven and baste the mango bbq sauce over them.
              13. Once basted, return them back into your oven and let then grill for a further 10-15 minutes so that the flavors meld and the meat becomes caramelized.
            `,
            image_url: 'https://res.cloudinary.com/drdradtyj/image/upload/v1720686558/porkribs_wmablu.jpg',
          },
        ];

        // Apply sorting based on sortBy state
        if (sortBy === 'title') {
          response.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === 'total_time') {
          response.sort((a, b) => {
            const timeA = parseInt(a.total_time.split(' ')[0]);
            const timeB = parseInt(b.total_time.split(' ')[0]);
            return timeA - timeB;
          });
        }

        // Filtering recipes based on searchQuery
        const filteredRecipes = response.filter((recipe) =>
          recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setRecipes(filteredRecipes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchQuery, sortBy]);

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <Box p="8" textAlign="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p="8" textAlign="center">
        <Text>Error fetching data. Please try again later.</Text>
      </Box>
    );
  }

  return (
    <Box bg="gray.100" py="24" px="4" minHeight="100vh">
      <Box maxW="7xl" mx="auto" px="6" lg="8">
        <Box maxW="2xl" mx="auto" mb="10">
          <Heading as="h2" size="3xl" fontWeight="bold" textAlign="center" mb="2">
            Delicious Recipes
          </Heading>
          <Text textAlign="center" fontSize="lg" color="gray.600">
            Discover the best recipes for every occasion.
          </Text>
        </Box>
        <Flex mx="auto" maxW="2xl" gridGap="8" flexWrap="wrap" justifyContent="space-between">
          {currentRecipes.map((recipe) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                <Image src={recipe.image_url} alt={recipe.title} />
                <Box p="6">
                  <Heading as="h3" size="lg" mb="2" lineHeight="tight">
                    {recipe.title}
                  </Heading>
                  <Text color="gray.600" mb="4">
                    Total Time: {recipe.total_time} | Prep Time: {recipe.prep_time} | Cook Time: {recipe.cook_time}
                  </Text>
                  <Text mb="4">
                    <strong>Ingredients:</strong> <pre>{recipe.ingredients}</pre>
                  </Text>
                  <Text mb="4">
                    <strong>Preparation Steps:</strong> <pre>{recipe.preparation_steps}</pre>
                  </Text>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Flex>
        <Box mt="10" textAlign="center">
          <Pagination
            recipesPerPage={recipesPerPage}
            totalRecipes={recipes.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Pagination = ({ recipesPerPage, totalRecipes, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <Stack direction="row" spacing="2" justify="center">
        {pageNumbers.map((number) => (
          <Button
            key={number}
            colorScheme={number === currentPage ? 'blue' : 'gray'}
            variant={number === currentPage ? 'solid' : 'outline'}
            size="sm"
            onClick={() => paginate(number)}
          >
            {number}
          </Button>
        ))}
      </Stack>
    </nav>
  );
};

export default Bites;
