import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavBar';
import AboutUs from './Pages/About/AboutUs'; 
import Home from './components/Home/Home'; 
import Products from './Pages/Products/Products';
import Director from './Pages/Director/Director';
import Career from './Pages/Career/Career';
import Contact from './Pages/Contact/Contact';
const App = () => {
    return (
        <Router>
            <div>
                <Navbar /> 
                <Routes>
                    <Route path="/" element={<Home />} /> 
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/director" element={<Director />} /> 
                    <Route path="/career" element={<Career />} /> 
                    <Route path="/contact" element={<Contact />} />   
                </Routes>
            </div>
        </Router>
    );
};

export default App;
