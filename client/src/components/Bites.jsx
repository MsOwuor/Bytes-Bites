import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Bites = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6); // Number of recipes per page

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        // Replace with actual API call or database query
        const response = await fetch('/api/recipes'); // Example endpoint

        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }

        const data = await response.json();

        // Apply sorting based on your logic (date, popularity, etc.)
        const sortedRecipes = data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setRecipes(sortedRecipes);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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
            Explore mouth-watering dishes.
          </Text>
        </Box>
        <Flex mx="auto" maxW="2xl" gridGap="8" flexWrap="wrap" justifyContent="space-between">
          {currentRecipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                <Box p="6">
                  <Heading as="h3" size="lg" mb="2" lineHeight="tight">
                    {recipe.title}
                  </Heading>
                  <Text color="gray.600" mb="4">
                    {recipe.category} | {new Date(recipe.date).toLocaleDateString()}
                  </Text>
                  <Text mb="4" className="line-clamp-3">
                    {recipe.description}
                  </Text>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    variant="outline"
                    as={Link}
                    href={`/recipes/${recipe.id}`} // Replace with actual link to recipe details
                  >
                    View Recipe
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Flex>
        <Box mt="10" textAlign="center">
          {/* Pagination component */}
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
      {pageNumbers.length > 1 && (
        <Flex justify="center">
          {pageNumbers.map((number) => (
            <Button
              key={number}
              colorScheme={number === currentPage ? 'blue' : 'gray'}
              variant={number === currentPage ? 'solid' : 'outline'}
              size="sm"
              onClick={() => paginate(number)}
              m="1"
            >
              {number}
            </Button>
          ))}
        </Flex>
      )}
    </nav>
  );
};

export default Bites;
