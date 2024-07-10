import React from 'react';
import { Box, Heading, Text, Button, Flex, Stack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const AboutUs = () => {
  return (
    <Box p="8" bg="gray.100" minHeight="100vh">
      <Box maxW="800px" mx="auto" textAlign="center" mb="12">
        <Heading as="h2" size="xl">About Us</Heading>
        <Text fontSize="xl" mt="4">Discover Our Services</Text>
      </Box>

      <Stack spacing="8" maxW="800px" mx="auto">
        <motion.div initial="hidden" animate="visible" variants={cardVariants}>
          <Text fontSize="lg" textAlign="center">
            Our company offers a unique blend of IT solutions and culinary expertise, providing our clients with a seamless journey from recipe to plate. Our team of experts is dedicated to delivering exceptional service and results.
          </Text>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={cardVariants}>
          <Text fontSize="lg" textAlign="center">
            Start with the recipe - find out what ingredients they want and give it to them.
          </Text>
        </motion.div>

        <Flex justify="center" mt="8">
          <motion.div initial="hidden" animate="visible" variants={cardVariants} textAlign="center">
            <Button colorScheme="teal" size="lg" as="a" href="/services">
              Discover More
            </Button>
          </motion.div>
        </Flex>

        <motion.div initial="hidden" animate="visible" variants={cardVariants} mt="8" textAlign="center">
          <Text fontSize="xl">It's all about the journey.</Text>
        </motion.div>
      </Stack>

      <Flex direction="column" alignItems="center" mt="12">
        <Heading as="h3" size="lg" mb="6">Our Team</Heading>

        <Flex direction={{ base: 'column', md: 'row' }} justify="center" align="center" wrap="wrap">
          {/* Worker 1 */}
          <Box maxW="sm" p="6" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="4" my="4">
            <Image src="/profile1.jpg" alt="Worker 1" borderRadius="full" boxSize="150px" mx="auto" />
            <Heading as="h4" size="md" mb="2" textAlign="center">Immaculate Owuor</Heading>
            <Text fontSize="md" mb="4" textAlign="center">CEO</Text>
            <Text fontSize="sm" fontStyle="italic" textAlign="center">Testimonial: "An exceptional culinary artist whose creativity and passion transform every meal into an unforgettable experience."</Text>
          </Box>

          {/* Worker 2 */}
          <Box maxW="sm" p="6" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="4" my="4">
            <Image src="/profile2.jpg" alt="Worker 2" borderRadius="full" boxSize="150px" mx="auto" />
            <Heading as="h4" size="md" mb="2" textAlign="center">Solomon Otieno</Heading>
            <Text fontSize="md" mb="4" textAlign="center">Co Founder</Text>
            <Text fontSize="sm" fontStyle="italic" textAlign="center">Testimonial: "An outstanding professional who seamlessly blends IT expertise with culinary passion, delivering innovative and delightful results."</Text>
          </Box>

          {/* Worker 3 */}
          <Box maxW="sm" p="6" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="4" my="4">
            <Image src="/profile3.jpg" alt="Worker 3" borderRadius="full" boxSize="150px" mx="auto" />
            <Heading as="h4" size="md" mb="2" textAlign="center">Lyvia Malyka</Heading>
            <Text fontSize="md" mb="4" textAlign="center">Inspiration</Text>
            <Text fontSize="sm" fontStyle="italic" textAlign="center">Testimonial: "An amazing chef whose culinary creations bring joy to our family and inspire everyone with their exceptional flavors and presentation."</Text>
          </Box>

          {/* Worker 4 */}
          <Box maxW="sm" p="6" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" mx="4" my="4">
            <Image src="/profile4.jpg" alt="Worker 4" borderRadius="full" boxSize="150px" mx="auto" />
            <Heading as="h4" size="md" mb="2" textAlign="center">Zhavia Sky</Heading>
            <Text fontSize="md" mb="4" textAlign="center">Inspiration</Text>
            <Text fontSize="sm" fontStyle="italic" textAlign="center">Testimonial: "An amazing chef whose culinary creations bring joy to our family and inspire everyone with their exceptional flavors and presentation."</Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutUs;
