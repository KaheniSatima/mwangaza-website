import React from 'react';
import './Staff.css';
import consultantImg from './assets/consultant.jpg';
import labTechImg from './assets/lab-technologist.jpg';
import nurseImg from './assets/specialist-nurse.jpg';

const staffMembers = [
  {
    image: consultantImg,
    name: 'Dr. Jane Mwangi',
    position: 'Specialist Consultant',
    roles: [
      'Oversees patient diagnosis and treatment planning',
      'Provides expert consultation for chronic disease management',
      'Guides clinical protocols and quality assurance'
    ]
  },
  {
    image: labTechImg,
    name: 'John Kamau',
    position: 'Lab Technologist',
    roles: [
      'Conducts diagnostic tests with precision',
      'Manages laboratory equipment and results processing',
      'Ensures accuracy and timeliness of patient reports'
    ]
  },
  {
    image: nurseImg,
    name: 'Faith Wanjiku',
    position: 'Specialist Nurse',
    roles: [
      'Provides patient education and follow-up care',
      'Supports counseling and wellness monitoring',
      'Coordinates with physicians for integrated care'
    ]
  }
];

const OurStaffPage = () => {
  return (
    <div className="staff-page-container">
      <h2 className="staff-page-title">Meet Our Team</h2>

      {staffMembers.map((member, index) => (
        <div key={index}>
          <div className="staff-page-card">
            <div className="staff-page-left">
              <img src={member.image} alt={member.name} className="staff-page-image" />
              <h3 className="staff-page-name">{member.name}</h3>
              <p className="staff-page-position">{member.position}</p>
            </div>
            <div className="staff-page-right">
              <h4 className="staff-page-roles-heading">Roles & Responsibilities</h4>
              <ul className="staff-page-roles-list">
                {member.roles.map((role, i) => (
                  <li key={i}>{role}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="staff-page-divider-wrapper">
            <div className="staff-page-divider"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurStaffPage;
