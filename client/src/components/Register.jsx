import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import axios from 'axios' ;
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async  (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);

    
    if (!email || !password) {
      alert('Please enter both email and password.');
      setLoading(false);	    
      return;
    }
	  try {
		  const response = await axios.post('http://127.0.0.1:5000/register', {
		    email: email,
		    password: password,
		  });
		  setMessage(response.data.message);

		  if (response.status === 201) {
			  setTimeout(() => navigate('/login'), 1500);
		  }
	  } catch (error) {
		  setMessage('Registration failed: ' + (error.response.data.message || 'Unknown error'));
	  } finally {
		  setLoading(false);
	  }
  };
	if (loading) return <Loading />;

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
		      {message && <Box mt="4" textAlign="center">{message}</Box>} {/* Display success/error message */}
		    </Box>
		  );
};
export default Register;
