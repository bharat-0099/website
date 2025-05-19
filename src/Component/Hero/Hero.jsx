import React from 'react';
import './Hero.css';
import profilepicture from '../../assets/profilepicture.png';
import resumePDF from '../../assets/BharatResume.pdf';
import hub from '../../assets/hub.png';
import linkedin from '../../assets/linkedin.png';

const Hero = () => {
  return (
    <div id="about" className="hero">
      <img src={profilepicture} alt="Bharat Chundru Profile" className="pics" />
      <h1>👋 Hi, I'm Bharat Chundru</h1>

      <p className="hero-intro">
      Software Engineer with over 2 years of hands-on experience designing and developing robust backend systems and full-stack web applications. My technical expertise lies in working with Java, Spring Boot, React, and Databases, and I specialize in building scalable, secure, and high-performance solutions that solve real-world business challenges.
      </p>
      <br></br>
      <p>I have experience creating and maintaining RESTful and GraphQL APIs, implementing asynchronous processing using Spring Boot’s @Async and CompletableFuture, and building clean, modular frontends with React and Redux Toolkit.</p>
      <br></br>
      <p>Currently, I’m contributing to the Illinois Department of Innovation & Technology, where I’m responsible for developing responsive user interfaces, optimizing database performance, and architecting transaction-heavy systems deployed on AWS services like Lambda, DynamoDB, and S3. I’ve worked on integrating tools like Apache Kafka for event-driven communication and Elasticsearch for fast, full-text search capabilities.</p>
      <br></br>
      <p>I’m passionate about writing clean, maintainable code and improving development efficiency through CI/CD pipelines with Jenkins, GitHub Actions, and Docker. Outside of work, I enjoy exploring new technologies, building personal projects like e-commerce platforms and dashboards, and engaging in coding challenges to stay sharp. I’m also focused on expanding my knowledge in distributed systems, cloud-native architecture, and system observability to continue growing as a backend and systems-focused engineer.</p>

      

  
      

      

      <div className="hero-action">
        <button
          className="download-btn"
          onClick={() => window.open(resumePDF, '_blank')}
        >
          Download Resume
        </button>
      </div>

      <div className="hero-icons">
        <a href="https://www.linkedin.com/in/bharat-chundru" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://github.com/bharat-0099" target="_blank" rel="noopener noreferrer">
          <img src={hub} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
