import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Portfolio = () => {
  return (
    <Box p="8" bg="blue.50" minHeight="100vh">
      <Heading as="h2" size="xl" mb="8" textAlign="center">Portfolio</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="8">
        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5 }}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="/slide1.jpg" alt="Work 1" objectFit="cover" w="100%" h={{ base: '200px', md: '300px' }} />
            <Box p="6">
              <Heading as="h3" size="lg" mb="4">Work Title 1</Heading>
              <Text mb="4">Description of the work done. This is a sample of our culinary expertise and creativity.</Text>
              <Button as="a" href="#" colorScheme="teal" mt="4">View</Button>
            </Box>
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5, delay: 0.2 }}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="/slide2.jpg" alt="Work 2" objectFit="cover" w="100%" h={{ base: '200px', md: '300px' }} />
            <Box p="6">
              <Heading as="h3" size="lg" mb="4">Work Title 2</Heading>
              <Text mb="4">Description of the work done. This is a sample of our culinary expertise and creativity.</Text>
              <Button as="a" href="#" colorScheme="teal" mt="4">View</Button>
            </Box>
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={cardVariants} transition={{ duration: 0.5, delay: 0.4 }}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Image src="/slide3.jpg" alt="Work 3" objectFit="cover" w="100%" h={{ base: '200px', md: '300px' }} />
            <Box p="6">
              <Heading as="h3" size="lg" mb="4">Work Title 3</Heading>
              <Text mb="4">Description of the work done. This is a sample of our culinary expertise and creativity.</Text>
              <Button as="a" href="#" colorScheme="teal" mt="4">View</Button>
            </Box>
          </Box>
        </motion.div>
      </SimpleGrid>
    </Box>
  );
};

export default Portfolio;
