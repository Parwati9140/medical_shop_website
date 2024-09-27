import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar'; // Import Navbar
import AboutUs from './Pages/About/AboutUs'; // Import AboutUs page component
import Home from './components/Home/Home'; // Example home component
import Products from './Pages/Products/Products';
import Director from './Pages/Director/Director';
import Career from './Pages/Career/Career';
import Contact from './Pages/Contact/Contact';
const App = () => {
    return (
        <Router>
            <div>
                <Navbar /> {/* Navbar stays on top across all routes */}
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Home Page */}
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/director" element={<Director />} /> 
                    <Route path="/career" element={<Career />} /> 
                    <Route path="/contact" element={<Contact />} />   {/* About Us Page */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
