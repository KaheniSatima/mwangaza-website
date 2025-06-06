import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Services from './Services';
import Blog from './Blog';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Staff from './Staff'; // ✅ Make sure the path is correct

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/our-staff" element={<Staff />} />

        </Routes>
      </div>
      <Footer /> {/* ✅ ADD THIS LINE */}
    </Router>
  );
}

export default App;
