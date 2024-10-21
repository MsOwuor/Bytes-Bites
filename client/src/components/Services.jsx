import React from 'react';
import { Box, Heading, Text, Image, Button, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Services = () => {
  return (
    <Box p="8" bg="blue.50" minHeight="100vh">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5 }}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="/slide1.jpg" alt="Our Creative Process" objectFit="cover" w="100%" h={{ base: '200px', md: '300px' }} />
            <Box p="6">
              <Heading as="h3" size="lg" mb="4">Our Culinary Arts</Heading>
              <Text mb="4">From selecting the finest ingredients to creating stunning presentations, our culinary experts are dedicated to delivering exceptional results.</Text>
              <Button as={Link} to="/news" colorScheme="teal">Enjoy</Button>
            </Box>
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5, delay: 0.2 }}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="/slide2.jpg" alt="My Work" objectFit="cover" w="100%" h={{ base: '200px', md: '300px' }} />
            <Box p="6">
              <Heading as="h3" size="lg" mb="4">Bytes</Heading>
              <Text mb="4">Explore my programming journey, key lessons learned, languages mastered, and impactful projects completed, showcasing growth, expertise, and passion for coding.</Text>
              <Button as={Link} to="/portfolio" colorScheme="teal">Discover</Button>
            </Box>
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5, delay: 0.4 }}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="/slide3.jpg" alt="About Me" objectFit="cover" w="100%" h={{ base: '200px', md: '300px' }} />
            <Box p="6">
              <Heading as="h3" size="lg" mb="4">Personal Life</Heading>
              <Text mb="4">Discover my journey as a mom of two girls and a wife, balancing family life with personal growth, sharing insights, challenges, and triumphs along the way.</Text>
              <Button as={Link} to="/posts" colorScheme="teal">View</Button>
            </Box>
          </Box>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
};

export default Services;
