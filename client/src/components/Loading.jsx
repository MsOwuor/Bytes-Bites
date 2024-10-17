import React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';

const Loading = () => {
	return (
		<Box
		display="flex"
		flexdirection="column"
		alignItems="center"
		height="100vh"
		backgroundColor="white"
		>
		<Spinner
		size="xl"
		thickness="4px"
		speed="0.65s"
		color="teal.500"
		mb={4}
		/>
		<Text fontSize="2xl" fontWeight="bold" fontFamily="'Dancing Script', cursive">
		Loading, please wait...
		</Text>
		</Box>
	);
};
export default Loading;
