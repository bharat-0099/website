import React from 'react';
import './Hero.css';
import profilepicture from '../../assets/profilepicture.png';
import resumePDF from '../../assets/Bharat-Chundru-Resume.pdf';
import hub from '../../assets/hub.png';
import res from '../../assets/res.png';
import linkedin from '../../assets/linkedin.png';

const Hero = () => {
  return (
    <div id="about" className="hero">
      <img src={profilepicture} alt="profile" className="pics" />
      <h1>I'm Bharat Chundru,</h1>
      <p>
        Computer Science Graduate from the University of Illinois Springfield and a Software Engineer with over a year of experience in developing high-performance web applications, APIs, and microservices. I specialize in Java, Python, Spring Boot, React, and databases, and I have a proven track record of enhancing system efficiency and user engagement through innovative technology solutions.
        <br /><br />
        Currently, I’m working as a Software Engineer where I develop scalable applications and optimize system performance for the Illinois Department of Innovation & Technology. My work revolves around creating responsive UIs with React, building high-concurrency systems using Spring Boot, and improving database performance through strategic optimizations.
        <br /><br />
        I hold a Master’s degree in Computer Science from the University of Illinois Springfield, where I’ve honed my skills in Machine Learning, Big Data, and Web Design. My expertise spans a wide range of technologies, including AWS, Docker, and CI/CD tools like Jenkins, all of which I use to ensure seamless deployments and efficient workflows.
        <br /><br />
        Outside of my professional work, I’m actively expanding my skill set with Spring and Spring Boot, and I enjoy tackling complex technical challenges and building efficient solutions. I’m passionate about staying up-to-date with the latest tech trends and am excited to contribute to cutting-edge projects.
      </p>

      <div className="hero-action">
        <button
          className="download-btn"
          onClick={() => window.open(resumePDF, '_blank')}
        >
          Resume
        </button>


      </div>

      <div className="hero-icons">
        <a href="https://www.linkedin.com/in/bharat-chundru" className="hero-resume">
          <img src={linkedin} alt="LinkedIn" />
        </a>

        <a href="https://github.com/bharat-0099" className="hero-resume">
          <img src={hub} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}

export default Hero;
