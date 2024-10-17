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
import Bites from './components/Bites';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer'; // Import Footer component
import Posts from './components/Posts';
import NewPost from './components/NewPost';

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
            <Route path="/news" element={<Bites />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<AboutUs />} />  
	    <Route path="/contact" element={<ContactUs />} />
	    <Route path="/posts" element={<Posts />} />
	    <Route path="/posts/new" element={<NewPost />} />
          </Routes>
        </Box>
        <Footer /> {/* Include Footer component here */}
      </Box>
    </Router>
  );
};

export default App;
