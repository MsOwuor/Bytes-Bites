import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { fetchPosts, createPost } from '../api/api'; // Import the fetchPosts function
import NewPost from './NewPost';

const Posts = () => {
	    const [posts, setPosts] = useState([]);
	    const [loading, setLoading] = useState(true);
	    const [error, setError] = useState('');

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const fetchedPosts = await fetchPosts();
				setPosts(fetchedPosts);
	                } catch (err) {
				setError('Error fetching posts.');
			} finally {
				setLoading(false);
			}
		};

		loadPosts();
	}, []);
	// function to handle creating a new post
	const handleCreatePost = (newPost) => {
		setPosts((prevPosts) => [...prevPosts, newPost]);
	};

	if (loading) return <Text>Loading posts...</Text>;
	if (error) return <Text>{error}</Text>;

	return (
		<Box>
		<Heading as="h2" size="lg" mb="4">Posts</Heading>
		<NewPost onCreatePost={handleCreatePost} /> {/* Include NewPost here */}
		{posts.map((post) => (
			<Box key={post.id} borderWidth="1px" borderRadius="lg" p="4" mb="4">
			<Heading size="md">{post.title}</Heading>
			<Text>{post.body}</Text>
			<Button colorScheme="blue" mt="2">Read More</Button>
			</Box>
		))}
		</Box>
	);
};
export default Posts;
