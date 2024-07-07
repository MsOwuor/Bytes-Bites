import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  Button,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Spinner,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date'); // Default sort by date
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(6); // Number of articles per page

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        // Simulating API call or fetching from a database
        // Replace with actual API call or database query
        // Example response structure
        const response = [
          {
            id: 1,
            title: 'Sample Article 1',
            category: 'Business',
            date: '2024-07-07',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          },
          {
            id: 2,
            title: 'Sample Article 2',
            category: 'Technology',
            date: '2024-07-06',
            content: 'Praesent sit amet odio quis nunc elementum finibus.',
          },
          // Add more articles here
        ];

        // Apply sorting based on sortBy state
        if (sortBy === 'date') {
          response.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else if (sortBy === 'popularity') {
          // Sort by popularity logic
        } else if (sortBy === 'relevance') {
          // Sort by relevance logic
        }

        // Filtering articles based on searchQuery
        const filteredArticles = response.filter((article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setArticles(filteredArticles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, [searchQuery, sortBy]);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

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
            Recent News Articles
          </Heading>
          <Text textAlign="center" fontSize="lg" color="gray.600">
            Discover the latest updates and insights.
          </Text>
        </Box>
        <Flex mx="auto" maxW="2xl" gridGap="8" flexWrap="wrap" justifyContent="space-between">
          {currentArticles.map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ width: '100%' }}
            >
              <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                <Box p="6">
                  <Heading as="h3" size="lg" mb="2" lineHeight="tight">
                    {article.title}
                  </Heading>
                  <Text color="gray.600" mb="4">
                    {article.category} | {new Date(article.date).toLocaleDateString()}
                  </Text>
                  <Text mb="4" className="line-clamp-3">
                    {article.content}
                  </Text>
                  <Button
                    colorScheme="blue"
                    size="sm"
                    variant="outline"
                    as={Link}
                    href={`#${article.id}`} // Replace with actual link to full article
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Flex>
        <Box mt="10" textAlign="center">
          <Pagination
            articlesPerPage={articlesPerPage}
            totalArticles={articles.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Box>
      </Box>
    </Box>
  );
};

const Pagination = ({ articlesPerPage, totalArticles, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
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

export default News;
