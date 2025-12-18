import React from 'react';
import './Hero.css';
import profilepicture from '../../assets/profilepicture.png';
import resumePDF from '../../assets/BharatChundru_FullStack.pdf';
import hub from '../../assets/hub.png';
import dppic from '../../assets/dp.jpeg';
import linkedin from '../../assets/linkedin.png';

const Hero = () => {
  return (
    <div id="about" className="hero">
      <img src={dppic} alt="Bharat Chundru Profile" className="pics" />
      <h1>👋 Hi, I'm Bharat Chundru</h1>

      <p className="hero-intro">
        Full Stack Engineer with 3+ years of experience in building scalable, secure, and cloud-native applications, I specialize in architecting and deploying end-to-end solutions on AWS using Java Spring Boot and React.js. My professional journey spans enterprise and government platforms, where I've leveraged tools like Apache Kafka, Docker, and Terraform to drive significant performance and reliability improvements, including reducing API response times by up to 60% and accelerating release cycles. I thrive at the intersection of backend and frontend development, consistently delivering robust microservices, responsive UIs, and automated DevOps workflows that enhance user experience and streamline business operations.
      </p>
      <br></br>
      <p>In addition to my software engineering expertise, I am the creator of a startup concept for a customized rice ordering application. This platform empowers users to personalize their rice blends by selecting types, grain sizes, aromas, and packaging, supported by real-time order tracking and seamless payment integration. By connecting local rice producers directly to consumers, the app modernizes the farm-to-table supply chain with hyperlocal delivery, subscription options, and robust quality assurance, redefining how customers access health-oriented rice products.</p>
      <br></br>
      
      <div className="hero-action">
        <button
          className="download-btn"
          onClick={() => window.open(resumePDF, '_blank')}
        >
          Download Resume
        </button>
      </div>

      <div className="hero-icons">
        
        <a href="https://github.com/bharat-0099" target="_blank" rel="noopener noreferrer">
          <img src={hub} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
