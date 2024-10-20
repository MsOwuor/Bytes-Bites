import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  Center,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="lightblue" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box as={Link} to="/" display="flex" alignItems="center">
            <Image src="/slide1.jpg" alt="Logo" boxSize="40px" mr="2" />
            <Box fontSize="xl" fontWeight="bold">
              Bytes-Bites
            </Box>
          </Box>
        </HStack>
        <Center flex="1" display={{ base: 'none', md: 'flex' }}>
          <HStack as="nav" spacing={8}>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/news">Bites</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
	  <Link to="/posts">Posts</Link>
          </HStack>
        </Center>
        <Flex alignItems="center">
          {isLoggedIn ? (
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                Account <ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/account">
                  My Account
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Stack direction="row" spacing={4}>
              <Button as={Link} to="/login" variant="link">
                Login
              </Button>
              <Button as={Link} to="/register" variant="link">
                Register
              </Button>
            </Stack>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link to="/" onClick={onClose}>
              Home
            </Link>
            <Link to="/services" onClick={onClose}>
              Services
            </Link>
            <Link to="/news" onClick={onClose}>
              Bites
            </Link>
            <Link to="/about" onClick={onClose}>
              About Us
            </Link>
            <Link to="/contact" onClick={onClose}>
              Contact Us
            </Link>
	      <Link to="posts" onClick={onClose}>
	      Posts
	      </Link>
            {isLoggedIn ? (
              <>
                <Link to="/account" onClick={onClose}>
                  My Account
                </Link>
                <Button onClick={handleLogout} variant="link">
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={onClose}>
                  Login
                </Link>
                <Link to="/register" onClick={onClose}>
                  Register
                </Link>
              </>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
