import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, Input, Textarea, Stack } from '@chakra-ui/react';
import { fetchPosts, likePost, addCommentToPost } from '../api/api';
import NewPost from './NewPost';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [commentText, setCommentText] = useState('');
    const [activeCommentPostId, setActiveCommentPostId] = useState(null);

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

    
    const handleLike = async (postId) => {
        try {
            const updatedPost = await likePost(postId); 
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId ? { ...post, likes: updatedPost.likes } : post
                )
            );
        } catch (err) {
            setError('Error liking the post.');
        }
    };

    
    const handleAddComment = async (postId) => {
        if (!commentText) return; 
        try {
            const updatedPost = await addCommentToPost(postId, commentText); 
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === postId ? { ...post, comments: updatedPost.comments } : post
                )
            );
            setCommentText(''); 
            setActiveCommentPostId(null); 
        } catch (err) {
            setError('Error adding comment.');
        }
    };

    
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
                    <Text mt="2" fontWeight="bold">Likes: {post.likes}</Text>
                    <Stack direction="row" spacing={4} mt="2">
                        {/* <Button colorScheme="blue" onClick={() => handleLike(post.id)}>
                            Like
                        </Button> */}
                        <Button onClick={() => setActiveCommentPostId(post.id)}>
                            Comment
                        </Button>
                        <Button colorScheme="blue">Read More</Button>
                    </Stack>
                    {/* Display comments */}
                    <Box mt="4">
                        {post.comments && post.comments.length > 0 && (
                            <Box>
                                <Heading size="sm" mb="2">Comments:</Heading>
                                {post.comments.map((comment) => (
                                    <Text key={comment.id} fontSize="sm" mb="1">- {comment.text}</Text>
                                ))}
                            </Box>
                        )}
                    </Box>
                    {/* Comment section */}
                    {activeCommentPostId === post.id && (
                        <Box mt="4">
                            <Textarea
                                placeholder="Add your comment"
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                            />
                            <Button
                                colorScheme="green"
                                mt="2"
                                onClick={() => handleAddComment(post.id)}
                            >
                                Add Comment
                            </Button>
                        </Box>
                    )}
                </Box>
            ))}
        </Box>
    );
};

export default Posts;
