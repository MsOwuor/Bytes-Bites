import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';

const Register = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, replace with actual signup logic
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    handleSignup(email, password);
  };

  return (
    <Box maxW="sm" mx="auto" mt="8" p="4">
      <Heading as="h2" size="lg" mb="4" textAlign="center">
        Signup
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" mb="4">
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">
          Signup
        </Button>
      </form>
    </Box>
  );
};

export default Register;
