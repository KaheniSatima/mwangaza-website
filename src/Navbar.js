import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Mwangaza Logo" className="logo" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <div className={`nav-links-container ${menuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
          </div>
          <div className="social-icons">
            <a href="tel:+123456789" title="Call"><i className="fas fa-phone"></i></a>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
