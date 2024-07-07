import React from 'react';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <Box>
      <Box className="w-full h-[40vh] md:h-screen overflow-hidden">
        <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src="/slide1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src="/slide2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          </div>
          <div>
            <img src="/slide3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          </div>
        </Carousel>
      </Box>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="center" p="8" bg="gray-100">
        <Stack spacing={4} maxW="lg" textAlign={{ base: 'center', md: 'left' }} className="md:text-left">
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" className="text-3xl font-bold">
            Embark on a Culinary Journey
          </Text>
          <Text fontSize={{ base: 'lg', md: '2xl' }} className="text-lg">
            Welcome to my online home. I invite you to explore my life and learn more about me.
          </Text>
          <Button colorScheme="teal" size={{ base: 'md', md: 'lg' }} className="mt-4">
            Learn More
          </Button>
        </Stack>
        <Box mt={{ base: 8, md: 0 }} ml={{ md: 8 }} className="relative animate-fadeInRight">
          <Image
            src="/profile.jpg"
            alt="Portrait"
            borderRadius="full"
            boxSize={{ base: '200px', md: '300px' }}
            className="shadow-lg"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
