import React, { useState } from 'react';
import { Box, Heading, Input, Textarea, Button, FormControl, FormLabel, Spinner, Text } from '@chakra-ui/react';
import { createPost } from '../api/api';
import { useNavigate } from 'react-router-dom'; 

const NewPost = ({ onCreatePost }) => {
	    const [title, setTitle] = useState('');
	    const [body, setBody] = useState('');
	    const [successMessage, setSuccessMessage] = useState('');
	    const [errorMessage, setErrorMessage] = useState('');
	    const [loading, setLoading] = useState(false);
	    const navigate = useNavigate();

	const handleSubmit = async (e) => {
		        e.preventDefault();
		        setSuccessMessage('');
		        setErrorMessage('');
		if (!title || !body) {
			setErrorMessage('Please fill in both the title and body.');
			return;
		}
		try {
				    setLoading(true);
			            const newPost = await createPost(title, body); 
	             		    setSuccessMessage('Post created successfully!');
			            setTitle('');
				    setBody('');
				    onCreatePost(newPost);
				    setTimeout(() => navigate('/posts'), 1500);
		} catch (error) {
			            setErrorMessage('Failed to create post: ' + error.response.data.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Box maxW="sm" mx="auto" mt="8" p="4">
			<Heading as="h2" size="lg" mb="4">Create New Post</Heading>
			{successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
			{errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
			<form onSubmit={handleSubmit}>
				<FormControl id="title" mb="4">
					<FormLabel>Title</FormLabel>
					<Input
						value={title} 
						onChange={(e) => {
							setTitle(e.target.value);
							setSuccessMessage('');
							setErrorMessage('');
						}}
					/>	
				</FormControl>
				<FormControl id="body" mb="4">
					<FormLabel>Body</FormLabel>
					<Textarea
						value={body}
						onChange={(e) => {
							setBody(e.target.value);
							setSuccessMessage('');
							setErrorMessage('');
						}}
					/>
				</FormControl>
				<Button
					type="submit"
					colorScheme="blue"
					isLoading={loading} 
					loadingText="Creating..."
				> 
					Create post
				</Button>
			</form>
		</Box>
	);
};

export default NewPost;
