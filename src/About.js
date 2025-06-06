import React from 'react';
import './About.css';
import backgroundImage from './assets/hero.jpg';
import receptionImg from './assets/reception.jpg';
import counselling1Img from './assets/counselling1.jpg';
import labImg from './assets/lab.jpg';
import consultationImg from './assets/consultation.jpg';
import counselling2Img from './assets/counselling2.jpg';
import phlebotomyImg from './assets/phlebotomy.jpg';
import consultantImg from './assets/consultant.jpg';
import labTechImg from './assets/lab-technologist.jpg';
import nurseImg from './assets/specialist-nurse.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHospitalUser,
  faHeartbeat,
  faHandHoldingMedical,
  faMicroscope,
  faUserShield,
  faUsers,
  faUserCheck,
  faHandshake
} from '@fortawesome/free-solid-svg-icons';


// ✅ Core values array
const values = [
  {
    icon: faHandHoldingMedical,
    title: 'Affordable, High-Quality Care',
    description: 'We ensure that healthcare is both affordable and of the highest quality, accessible to everyone, regardless of their background or financial situation.',
  },
  {
    icon: faHeartbeat,
    title: 'Prevention First',
    description: 'We prioritize prevention by educating individuals and communities about healthy habits and risk factors, empowering them to make informed choices.',
  },
  {
    icon: faMicroscope,
    title: 'Proven, Effective Treatment',
    description: 'We provide evidence-based care to prevent, diagnose and treat hypertension and diabetes effectively, using the latest research and proven methods.',
  },
  {
    icon: faUserShield,
    title: 'Honesty and Transparency',
    description: 'We believe in being open and honest, in all our interactions, ensuring that patients understand their health, treatment options and progress every step of the way.',
  },
  {
    icon: faUsers,
    title: 'Community-Centered Approach',
    description: 'We work closely with local communities, listening to their needs and providing culturally relevant accessible health solutions, helping us empower individuals to take ownership of their well-being.',
  },
  {
    icon: faUserCheck,
    title: 'Personalized Care',
    description: 'We recognize that every individual is unique. We offer tailored care to meet the specific needs of each person, helping them manage their health on their terms.',
  },
  {
    icon: faHandshake,
    title: 'Long-Term Impact Through Collaboration',
    description: 'We believe in creating lasting change through partnerships with government, healthcare systems, and local organizations, working together for the sustained well-being of our communities.',
  }
];

const staffMembers = [
  {
    image: consultantImg,
    name: 'Dr. Jane Mwangi',
    position: 'Specialist Consultant',
  },
  {
    image: labTechImg,
    name: 'John Kamau',
    position: 'Lab Technologist',
  },
  {
    image: nurseImg,
    name: 'Faith Wanjiku',
    position: 'Specialist Nurse',
  },
];

// ✅ Facilities array and section moved OUTSIDE
const facilities = [
  {
    title: 'Reception',
    description: 'Welcoming area where patients are received and guided.',
    image: receptionImg,
  },
  {
    title: 'Counselling Room 1',
    description: 'Private space for supportive and confidential counselling.',
    image: counselling1Img,
  },
  {
    title: 'Laboratory',
    description: 'Well-equipped lab for timely and accurate diagnostic testing.',
    image: labImg,
  },
  {
    title: 'Consultation Room',
    description: 'Professional consultations with our specialists.',
    image: consultationImg,
  },
  {
    title: 'Counselling Room 2',
    description: 'Additional space for mental health and wellness support.',
    image: counselling2Img,
  },
  {
    title: 'Phlebotomy',
    description: 'Dedicated space for safe and efficient blood collection.',
    image: phlebotomyImg,
  }
];

// ✅ OurStaffSection
const OurStaffSection = () => {
  return (
    <section className="staff-section">
      <h2 className="staff-title">Our Staff</h2>
      <p className="staff-intro">
        At Mwangaza Wellness and Medical Centre, our dedicated and experienced team is the heartbeat of our care. Each member brings compassion, expertise, and a shared commitment to your well-being.
      </p>
      <div className="staff-grid">
        {staffMembers.map((member, index) => (
          <div className="staff-card" key={index}>
            <img src={member.image} alt={member.name} className="staff-image" />
            <h3 className="staff-name">{member.name}</h3>
            <p className="staff-position">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ FacilitiesSection
const FacilitiesSection = () => {
  return (
    <section className="facilities-section">
      <h2 className="facilities-title">Our Facilities</h2>
      <p className="facilities-intro">
        Explore the key functional spaces at Mwangaza Wellness and Medical Centre, designed for efficiency, privacy, and compassionate care.
      </p>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <div className="facility-card" key={index}>
            <img src={facility.image} alt={facility.title} className="facility-image" />
            <h3 className="facility-name">{facility.title}</h3>
            <p className="facility-description">{facility.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// ✅ Main AboutUs Component
const AboutUs = () => {
  return (
    <div className="about-page-container">
      {/* Top Banner */}
      <div className="about-banner">
        <div className="about-overlay">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Learn more about Mwangaza Wellness and Medical Centre</p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="who-we-are-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="who-we-are-overlay">
          <div className="who-we-are-content">
            <h2>Who We Are</h2>
            <p>
              Mwangaza Wellness and Medical Centre is committed to promoting wellness
              and managing chronic diseases like diabetes and hypertension through
              compassionate and community-driven care.
            </p>
          </div>
        </div>
      </section>

      <div className="red-divider"></div>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mission">
            <FontAwesomeIcon icon={faHospitalUser} className="mv-icon" />
            <h3>Our Mission</h3>
            <p>To reduce the risk of hypertension and diabetes by empowering individuals to take control of their health and transforming patients into informed healthcare consumers.</p>
          </div>
          <div className="vision">
            <FontAwesomeIcon icon={faHeartbeat} className="mv-icon" />
            <h3>Our Vision</h3>
            <p>To be a leading program in Africa for preventing and managing hypertension and diabetes, empowering people to live healthier, fuller lives.</p>
          </div>
        </div>
      </section>

      <div className="red-divider"></div>

      {/* Core Values */}
      <section className="core-values-section">
        <h2 className="values-heading">Our Core Values</h2>
        <div className="values-wrapper">
          <div className="values-left">
            {values.slice(0, 4).map((val, index) => (
              <div key={index} className="value-card">
                <FontAwesomeIcon icon={val.icon} className="value-icon" />
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
          <div className="values-right">
            {values.slice(4).map((val, index) => (
              <div key={index + 4} className="value-card">
                <FontAwesomeIcon icon={val.icon} className="value-icon" />
                <h3>{val.title}</h3>
                <p>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="red-divider"></div>

      {/* Staff Section */}
      <OurStaffSection />

      <div className="red-divider"></div>

      {/* Facilities Section */}
      <FacilitiesSection />

      <div className="red-divider"></div>
      
    </div>
  );
};

export default AboutUs;
