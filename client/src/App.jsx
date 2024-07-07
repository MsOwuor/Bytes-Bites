import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import MyAccount from './components/MyAccount';
import News from './components/News';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'; // Import Footer component

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
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </Box>
        <Footer /> {/* Include Footer component here */}
      </Box>
    </Router>
  );
};

export default App;
