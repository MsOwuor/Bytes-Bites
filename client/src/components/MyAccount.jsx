import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';

const MyAccount = ({ user, userPosts }) => {
  return (
    <Box maxW="7xl" mx="auto" px="6" py="8">
      <Heading as="h2" size="xl" mb="4">
        My Account
      </Heading>
      <Box mb="4">
        <Text>
          <strong>Email:</strong> {user.email}
        </Text>
        {/* Add more user information as needed */}
      </Box>
      <Divider mb="4" />
      <Heading as="h3" size="lg" mb="4">
        My Posts
      </Heading>
      {userPosts.map((post) => (
        <Box key={post.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p="4" mb="4">
          <Heading as="h4" size="md" mb="2">
            {post.title}
          </Heading>
          <Text color="gray.600">{post.content}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default MyAccount;
