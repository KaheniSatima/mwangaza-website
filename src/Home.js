import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroImage from './assets/hero.jpg'; // Replace with your actual image path


import screeningImg from './assets/screening.jpg';
import diagnosticsImg from './assets/diagnostics.jpg';
import managementImg from './assets/management.jpg';
import followupImg from './assets/followup.jpg';
import counsellingImg from './assets/counselling.jpg';
import trainingImg from './assets/training.jpg';
import nyeriLogo from './assets/nyeri-logo.jpg';


const PartnershipSection = () => {
  return (
    <section className="partnership-section">
      <div className="partnership-container">
        <div className="partner-logo">
          <img src={nyeriLogo} alt="Nyeri County Government Logo" />
        </div>
        <div className="partner-description">
          <h2>In Partnership with Nyeri County Government</h2>
          <p>
            We are proud to collaborate with the Nyeri County Government to enhance community health 
            services focused on diabetes and hypertension. This partnership aims to ensure quality 
            care, early detection, and better management of chronic diseases for residents across the county.
          </p>
        </div>
      </div>
    </section>
  );
};


const services = [
  {
    title: 'Diabetes & Hypertension Screening',
    description: 'Early detection to help prevent complications through regular screening.',
    image: screeningImg,
  },
  {
    title: 'Diagnostics & Laboratory Services',
    description: 'Comprehensive tests with accurate results to guide treatment decisions.',
    image: diagnosticsImg,
  },
  {
    title: 'Diabetes & Hypertension Management',
    description: 'Ongoing care plans tailored to each individual’s health needs.',
    image: managementImg,
  },
  {
    title: 'Chronic Disease Follow-up & Monitoring',
    description: 'Track and manage chronic conditions effectively over time.',
    image: followupImg,
  },
  {
    title: 'Counselling',
    description: 'Supportive guidance to manage lifestyle changes and health challenges.',
    image: counsellingImg,
  },
  {
    title: 'Trainings',
    description: 'Educational sessions to empower patients and caregivers.',
    image: trainingImg,
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-header">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay">
          <div className="hero-text">
            <h1>“Your Health Deserves More Than Just Hope — Take Action Against Diabetes and Hypertension Today.”</h1>
            <p>We specialize in managing diabetes and hypertension with compassion and care.</p>
            <Link to="/contact" className="contact-button">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Red Divider */}
      <div className="red-divider"></div>
      {/* Services Section */}
      <ServicesSection />

      {/* Red Divider */}
      <div className="red-divider"></div>

       {/* ✅ Partnership Section */}
      <PartnershipSection />

      {/* Red Divider */}
      <div className="red-divider"></div>

    </div>
  );
};

export default Home;
