import React from 'react';
import './Experince.css';
import kube from '../../assets/kube.png';
import uis from '../../assets/uis.svg';

const Experince = () => {
  return (
    <div id='Exiperince' className='exp'>
      <div className="exp-title">
        <h1>Experiences</h1>
      </div>
      <div className="exp-container">
        <div className="exp-box">
          <img src={kube} alt="Kube Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Developer Intern</h2>
            <p>Kube IT, Atlanta, GA</p>
            <p>March 2024 to Oct 2024</p>
            <ul>
              <li>Crafted responsive user interfaces with HTML5, CSS3, and Bootstrap, enhancing user engagement through intuitive design and interactive elements.</li>
              <li>Constructed reusable React components and employed Redux for efficient state management, decreasing code redundancy by 25% and improving maintainability.</li>
              <li>Utilized Spring Boot to design and construct scalable RESTful APIs, ensuring communication between client and server.</li>
              <li>Cooperated in Agile teams, participating in sprint planning and code reviews, which resulted in a 50% increase in deployment frequency.</li>
              <li>Employed Git and GitHub for version control, improving code management efficiency and fostering seamless collaboration among team members.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
          <img src={uis} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Research Assistant</h2>
            <p>University of Illinois Springfield</p>
            <p>Feb 2023 to Dec 2023</p>
            <ul>
              <li>Developed a REST API using MongoDB to store data from learning management systems.</li>
              <li>Implemented MERN-Stack web application to analyze data</li>
              <li>Evaluated methods for demonstrating GitHub collaboration in a teaching environment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experince;
