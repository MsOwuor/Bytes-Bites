import React from 'react';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/react';
import 'tailwindcss/tailwind.css';

const Home = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      bgImage="url('/slide1.jpg')"
      bgSize="cover"
      bgPosition="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        p="8"
        bg="rgba(255, 255, 255, 0.8)"
        borderRadius="md"
        className="animate__animated animate__fadeIn"
      >
        <Stack spacing={4} maxW="lg" textAlign={{ base: 'center', md: 'left' }} className="md:text-left">
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" className="animate__animated animate__fadeInLeft">
            Embark on a Culinary Journey
          </Text>
          <Text fontSize={{ base: 'lg', md: '2xl' }} className="animate__animated animate__fadeInLeft animate__delay-1s">
            Welcome to my online home. I invite you to explore my life and learn more about me.
          </Text>
          <Button colorScheme="teal" size={{ base: 'md', md: 'lg' }} className="mt-4 animate__animated animate__fadeInUp animate__delay-2s">
            Learn More
          </Button>
        </Stack>
        <Box mt={{ base: 8, md: 0 }} ml={{ md: 8 }} className="relative animate__animated animate__fadeInRight animate__delay-3s">
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
