import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';
// Function to log in a user
export const loginUser = async (email, password) => {
	try {

		const response = await axios.post(`${API_URL}/login`, { email, password });
		localStorage.setItem('token', response.data.access_token);
		return response.data; // Return the response data containing the token
	} catch (error) {
		console.error('Login error:', error.response || error.message ||error);
		throw new Error(error.response?.data?.message || 'Login failed');
	}
};

// Function to fetch all posts
export const fetchPosts = async () => {
	try {

		const response = await axios.get(`${API_URL}/posts`); // Adjust the API_URL if needed
		return response.data; // Return the fetched posts
	} catch (error) {
		console.error('Error fetching posts:', error.response || error.message || error);
		throw new Error(error.response?.data?.message || 'Failed to fetch posts');
	}
};

// Function to create a new post
export const createPost = async (title, body) => {
	const token = localStorage.getItem('token'); // Get the token for authorization
	if (!token) {
		throw new Error('Unauthorized: No token found. Please log in.');
	}
	try {

		const response = await axios.post(`${API_URL}/posts`, { title, body }, {
	     		headers: {
		     		Authorization: `Bearer ${token}` // Send the token in the headers
			}
	});
	return response.data; // Return the created post
	} catch (error) {
		console.error('Error creating post:', error.response || error.message || error);
		throw new Error(error.response?.data?.message || 'Failed to create post');
	}
};

