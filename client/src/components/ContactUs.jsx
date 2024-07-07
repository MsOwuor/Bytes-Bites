import React, { useState } from 'react';
import axios from 'axios';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:3001/send-email', formData);
      console.log('Email sent successfully:', response.data.message);
      // Optionally, display a success message or redirect to a thank you page
    } catch (error) {
      console.error('Error sending email:', error);
      // Handle error state or display an error message to the user
    }
  };

  return (
    <Box p="8">
      <Heading as="h2" size="xl" mb="8">Contact Us</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </FormControl>
        <FormControl id="message" mb="4">
          <FormLabel>Message</FormLabel>
          <Textarea name="message" value={formData.message} onChange={handleChange} rows="6" required />
        </FormControl>
        <Button type="submit" colorScheme="teal">Send Message</Button>
      </form>
    </Box>
  );
};

export default ContactUs;
