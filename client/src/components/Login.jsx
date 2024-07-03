import React, { useState } from 'react';
import axios from 'axios';
import { Input, Button, FormControl, FormLabel, Heading, Box } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Button type="submit">Login</Button>
      </form>
    </Box>
  );
};

export default Login;
