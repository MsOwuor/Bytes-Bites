import React from 'react';
import { Box, Flex, Heading, Text, Link, Input, Textarea, Button, Stack, Image } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" color="black" py="8" px="4">
      <Box maxW="6xl" mx="auto">
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="flex-start">
          <Box flex="1">
            <Heading as="h3" size="md" mb="4">Connect with Us</Heading>
            <Stack direction="row" spacing="4" mb="4">
              <Link href="https://www.facebook.com/owuorimmaculate/" target="_blank"><FaFacebook size={24} /></Link>
              <Link href="https://x.com/myquiey?t=AvexFJqezsvBynvie_BFYQ&s=09" target="_blank"><FaTwitter size={24} /></Link>
              <Link href="https://www.linkedin.com/in/immaculate-adhiambo-aab4111bb/" target="_blank"><FaLinkedin size={24} /></Link>
              <Link href="https://www.instagram.com/myquiey/" target="_blank"><FaInstagram size={24} /></Link>
            </Stack>
            <Text mb="4">Address: Prime residence, Nairobi, Kenya</Text>
            <Text mb="4">Telephone: +254 741020860</Text>
            <Text mb="4">Email: immaculateadhiambo79@gmail.com</Text>
            <Image src="/slide1.jpg" alt="Logo" boxSize="80px" mb="4" />
          </Box>
          <Box flex="1">
            <Heading as="h3" size="md" mb="4">Send us your Feedback</Heading>
            <Stack spacing="4">
              <Input placeholder="Your Name" size="md" />
              <Input placeholder="Your Email" size="md" />
              <Textarea placeholder="Your Message" size="md" h="100px" />
              <Button colorScheme="teal" size="md" mt="2">Send Feedback</Button>
            </Stack>
          </Box>
        </Flex>
        <Box mt="8" textAlign="center">
          <Text fontSize="sm">&copy; 2024 Bytes and Bites. All rights reserved.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
