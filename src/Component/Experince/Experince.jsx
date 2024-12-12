import React, { useEffect } from 'react';
import './Experince.css';
import kube from '../../assets/kube.png';
import uis from '../../assets/uis.svg';
import doit from '../../assets/doit.png';

const Experince = () => {
  useEffect(() => {
    const boxes = document.querySelectorAll('.exp-box');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    boxes.forEach((box) => observer.observe(box));

    return () => {
      boxes.forEach((box) => observer.unobserve(box));
    };
  }, []);

  return (
    <div id="Experience" className="exp">
      <div className="exp-title">
        <h1>Experiences</h1>
      </div>
      <div className="exp-container">
        <div className="exp-box">
          <img src={doit} alt="DoIT Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Engineer</h2>
            <p>Illinois Department of Innovation & Technology (DoIT), Springfield, IL</p>
            <p>Feb 2024 to Present</p>
            <ul>
              <li>Developed responsive user interfaces using HTML5, CSS3, and Bootstrap Grid System, leveraging Flexbox and media queries to ensure cross-device compatibility and enhanced accessibility.</li>
              <li>Reduced code redundancy by 25% by implementing reusable React components using React Hooks (useState, useEffect) and optimizing state management with Redux Toolkit.</li>
              <li>Built a high-concurrency payment processing system using Spring Boot Async Programming, improving throughput by 40%.</li>
              <li>Implemented Spring Data JPA Specifications with dynamic query filters and @EntityGraph for lazy loading, reducing query time by 60%.</li>
              <li>Enhanced deployment frequency by 50% through Agile methodologies, performing PR reviews using Bitbucket and GitHub.</li>
              <li>Automated CI/CD pipelines with Jenkins, Dockerized applications, and deployed them on EKS clusters.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
          <img src={uis} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Research Assistant</h2>
            <p>University of Illinois Springfield</p>
            <p>Jun 2020 to Aug 2020</p>
            <ul>
              <li>Designed and developed a highly performant REST API using MongoDB with Spring Boot, reducing data retrieval time by 50%.</li>
              <li>Built a dynamic MERN-Stack web application with Redux and D3.js for real-time data visualization, improving research efficiency by 30%.</li>
              <li>Conducted workshops on advanced Git workflows, enhancing students' proficiency in collaborative development practices.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
          <div className="exp-info">
            <h2>Software Engineer Intern</h2>
            <p>Andhra Pradesh State Development Skill Corporation (APSSDC)</p>
            <p>Feb 2023 to Dec 2023</p>
            <ul>
              <li>Designed and maintained web applications using HTML5, CSS3, and JavaScript, achieving a 30% performance boost in request handling.</li>
              <li>Built a job portal with JWT-based authentication, OAuth2 login integration, and role-based access control (RBAC).</li>
              <li>Developed an automated testing framework using JUnit and integrated Maven build profiles for efficient builds.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experince;
