import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import MyAccount from './components/MyAccount';
import News from './components/News';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Box>
        <Navbar />
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
