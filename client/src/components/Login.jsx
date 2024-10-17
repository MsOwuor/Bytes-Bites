import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, FormHelperText } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();	

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Basic validation, replace with actual authentication logic
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    try {
	const response = await loginUser(email, password); 
	console.log('Login successful!', response); // Check if you get the token here
	alert('Login successful! Token: ' + response.access_token); // Display success message or handle token
	                      // You can save the token to local storage or state if needed
	localStorage.setItem('token', response.access_token);
	navigate('/');

	} catch (error) {
	  setErrorMessage('Login failed: ' + error.response.data.message); // Display error message
	}
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
