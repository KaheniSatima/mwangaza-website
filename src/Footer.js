import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Left: Vision */}
        <div className="footer-section">
          <h4>OUR VISION</h4>
          <p>
            To be a leading program in Africa for preventing and managing hypertension and diabetes , empowering people to live healthier, fuller lives.
          </p>
        </div>

        {/* Middle Left: Quick Links */}
        <div className="footer-section">
          <h4>QUICK LINKS</h4>
          <ul>
  <li><Link to="/our-staff">Our Staff</Link></li>
  <li><Link to="/our-facilities">Our Facilities</Link></li>
  <li><Link to="/media">Media</Link></li>
  <li><Link to="/faqs">FAQs</Link></li>
</ul>

        </div>

        {/* Middle Right: Addresses */}
        <div className="footer-section">
          <h4>ADDRESSES</h4>
          <p>P.O. Box 41220-00100, Nairobi, Kenya</p>
          <p>Call: +254 792 994 876/ +254 736 002 467</p>
          <p>Email: info@mwangaza.org</p>
          <p>Location: Kiamwangi, Karatina</p>
        </div>

        {/* Right: Social Media */}
        <div className="footer-section connect">
          <h4>CONNECT WITH US</h4>
          <div className="social-icon">
            <a href="tel:+123456789" title="Call"><i className="fas fa-phone"></i></a>
            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" title="WhatsApp"><i className="fab fa-whatsapp"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fab fa-facebook"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © 2025 | MWANGAZA WELLNESS & MEDICAL CENTRE | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
