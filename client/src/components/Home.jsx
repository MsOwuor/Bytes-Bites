import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'tailwindcss/tailwind.css';
import 'animate.css';
import { fetchPosts } from '../api/api';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadPosts = async () => {
			try {
				const fetchedPosts = await fetchPosts();
				setPosts(fetchedPosts);
			} catch (error) {
				console.error('Error fetching posts:', error);
			} finally {
				setLoading(false);
			}
		};

		loadPosts();
	}, []);

	return (
    	<Box position="relative" w="100%" minH="100vh">

      		<Box className="w-full h-full overflow-hidden">
        		<Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showStatus={false}>
          			<div>
            				<img src="/slide1.jpg" alt="Slide 1" className="w-full h-full object-cover" />
          			</div>
          			<div>
            				<img src="/slide2.jpg" alt="Slide 2" className="w-full h-full object-cover" />
          			</div>
          			<div>
            				<img src="/slide3.jpg" alt="Slide 3" className="w-full h-full object-cover" />
          			</div>
        		</Carousel>
      		</Box>

      		<Flex
        		direction={{ base: 'column', md: 'row' }}
        		align="center"
        		justify="center"
        		p="8"
        		position="absolute"
        		top="0"		
        		left="0"
        		w="100%"
        		h="100%"
        		bg="rgba(0, 0, 0, 0.5)"
        		color="white"
      		>
        		<Stack spacing={4} maxW="lg" textAlign={{ base: 'center', md: 'left' }}>
          			<Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" className="animate__animated animate__fadeInLeft">
            Code and Cook : Where technology meets Motherhood
          			</Text>
          			<Text fontSize={{ base: 'lg', md: '2xl' }} className="animate__animated animate__fadeInLeft animate__delay-1s">
            Welcome to my online home. I invite you to explore my life and learn more about me.
          			</Text>
          			<Button
            				as={Link}
            				to="/about"
            				colorScheme="teal"
            				size={{ base: 'md', md: 'lg' }}
            				className="mt-4 animate__animated animate__fadeInUp animate__delay-2s"
          			>
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

			<Box mt="8" p="4">
				<Text fontSize="2xl" fontWeight="bold" mb="4">Latest Posts</Text>
				{loading ? (
					<Text>Loading posts...</Text> // Show loading text while fetching
				) : (
					posts.map((post) => (
						<Box key={post.id} borderWidth="1px" borderRadius="lg" p="4" mb="4" bg="white" color="black">
						<Text fontSize="xl" fontWeight="bold">{post.title}</Text>
						<Text>{post.body.slice(0, 100)}...</Text> {/* Display a snippet of the post body */}
						<Button as={Link} to={`/posts/${post.id}`} mt="2" colorScheme="blue">Read More</Button>
						</Box>
					))
				)}
		</Box>

		<Box mt="8" textAlign="center" MB="8">
		   <Button as={Link} to="posts/new" colorscheme="teal" size="lg">
			Create a New Post
		</Button>
		</Box>
		</Box>
	);
};

export default Home;
