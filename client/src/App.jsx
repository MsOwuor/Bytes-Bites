import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Box, Flex, Spacer, Image, IconButton, useDisclosure, Stack, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SettingsIcon } from '@chakra-ui/icons';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import MyAccount from './components/MyAccount';
import News from './components/News'; // Added the missing News component import

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Router>
      <Box>
        <Flex as="nav" p="4" bg="gray.800" color="white" align="center">
          <Flex align="center">
            <Image src="/path-to-logo.png" alt="Logo" boxSize="40px" mr="2" />
            <Box as={Link} to="/" fontSize="xl" fontWeight="bold">
              Bytes-Bytes
            </Box>
          </Flex>
          <Spacer />
          <Box display={{ base: 'none', md: 'block' }}>
            <Flex align="center" justify="center">
              <Button as={Link} to="/" variant="link" mx="4">
                Home
              </Button>
              <Button as={Link} to="/services" variant="link" mx="4">
                Services
              </Button>
              <Button as={Link} to="/news" variant="link" mx="4">
                News
              </Button>
              <Button as={Link} to="/about" variant="link" mx="4">
                About Us
              </Button>
              <Button as={Link} to="/contact" variant="link" mx="4">
                Contact Us
              </Button>
            </Flex>
          </Box>
          <Spacer />
          <Box display={{ base: 'none', md: 'block' }}>
            <Button as={Link} to="/login" variant="link" mx="2">
              Login
            </Button>
            <Button as={Link} to="/register" variant="link" mx="2">
              Register
            </Button>
            <Button as={Link} to="/account" variant="link" mx="2" display="flex" alignItems="center">
              My Account
              <SettingsIcon ml="2" />
            </Button>
          </Box>
          <IconButton
            aria-label="Open Menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
        {isOpen ? (
          <Box pb="4" display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              <Button as={Link} to="/" variant="link" onClick={onClose}>
                Home
              </Button>
              <Button as={Link} to="/services" variant="link" onClick={onClose}>
                Services
              </Button>
              <Button as={Link} to="/news" variant="link" onClick={onClose}>
                News
              </Button>
              <Button as={Link} to="/about" variant="link" onClick={onClose}>
                About Us
              </Button>
              <Button as={Link} to="/contact" variant="link" onClick={onClose}>
                Contact Us
              </Button>
              <Button as={Link} to="/login" variant="link" onClick={onClose}>
                Login
              </Button>
              <Button as={Link} to="/register" variant="link" onClick={onClose}>
                Register
              </Button>
              <Button as={Link} to="/account" variant="link" onClick={onClose} display="flex" alignItems="center">
                My Account
                <SettingsIcon ml="2" />
              </Button>
            </Stack>
          </Box>
        ) : null}
        <Box p="4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
};

export default App;
