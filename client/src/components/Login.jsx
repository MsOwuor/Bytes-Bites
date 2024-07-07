import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation, replace with actual authentication logic
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    handleLogin(email, password);
  };

  return (
    <Box maxW="sm" mx="auto" mt="8" p="4">
      <Heading as="h2" size="lg" mb="4" textAlign="center">
        Login
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
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
