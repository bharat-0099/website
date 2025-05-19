import React, { useEffect } from 'react';
import './Experince.css';
import kube from '../../assets/kube.png';
import uis from '../../assets/uis.svg';
import doit from '../../assets/doit.png';
import apssdc from '../../assets/apssdc.jpg';
import bsnl from '../../assets/Bsnl.png';
import intechl from '../../assets/intech.png';

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
      { threshold: 0.4 }
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
            <p>March 2024 to Present</p>
            <ul>
              <li>Developed responsive user interfaces using HTML5, CSS3, and Bootstrap Grid System, leveraging Flexbox and media queries to ensure cross-device compatibility and enhanced accessibility.</li>
              <li>Implemented reusable React components and optimizing state management using Redux Toolkit, including actions, reducers, thunks, and selectors to efficiently manage and streamline application state
              </li>
              <li>Built a high-concurrency payment processing system using Spring Boot Async Programming with @Async and CompletableFuture, improving throughput by 40%. Utilized ThreadPoolTaskExecutor to optimize thread management and avoid bottlenecks during bulk API calls.</li>
              <li>Solved slow database queries in a multi-tenant application by implementing Spring Data JPA Specifications with dynamic query filters and @EntityGraph for lazy loading, reducing query time by 60%.</li>
              <li>Enhanced deployment frequency by 50% through Agile methodologies, actively participating in sprint planning, backlog grooming, and performing pull request (PR) reviews using tools like Bitbucket and GitHub.
              </li>
              <li>Automated CI/CD pipelines with Jenkins, configuring pipeline scripts (Jenkinsfile) to automate builds, run unit tests with JUnit 5, and deploy artifacts to Nexus Repository Manager. Utilized Docker to containerize applications for consistent deployments across environments on EKS.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
          <img src={intechl} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Event Cordinator</h2>
            <p>In Technet</p>
            <p>Aug 2021 - July 2022</p>
            <ul>
              <li>Spearheaded frontend development with React and React Query, enabling seamless data synchronization with backend APIs.</li>
              <li>Built and optimized REST APIs using Spring Boot and JDBC, enhancing application responsiveness by 30%.</li>
              <li>Leveraged Elasticsearch for high-speed full-text search, improving query performance by 40%.</li>
              <li>Implemented CI/CD pipelines with GitHub Actions and Jenkins, cutting release times by 50%.</li>
              <li>Led secure API design using JWT/OAuth2 and built automated testing with JUnit and Maven.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
        <img src={bsnl} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Engineer Intern</h2>
            <p>BSNL </p>
            <p>March 2021 - June 2021</p>
            <ul>
              <li>Designed and maintained dynamic web applications using React, JavaScript, HTML5, and SCSS, leveraging React Query for real-time updates and optimizing backend logic with Spring Boot, REST APIs, and JDBC, achieving a 30% performance boost in request handling
              </li>
              <li>Built with modular features such as JWT-based authentication, OAuth2 login integration, and role-based access control (RBAC) using RESTful APIs. Enhanced search functionalities with Elasticsearch and filter-based indexing, reducing search latency by 40%.
              </li>
              <li>Developed an automated testing framework using JUnit for backend unit testing and integrated Maven build profiles for environment-specific configurations, ensuring efficient builds and consistent test coverage.
              </li>
              <li>Developed an automated testing framework using JUnit for backend unit testing and integrated Maven build profiles for environment-specific configurations, ensuring efficient builds and consistent test coverage.</li>
            </ul>
          </div>
        </div>

        <div className="exp-box">
        <img src={apssdc} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Wb Developer Intern </h2>
            <p>BSNL India</p>
            <p>Sep 2020 - Dec 2020</p>
            <ul>
              <li>Designed and maintained Dashboards using HTML5, CSS3, and JavaScript, improving UI/UX performance, Optimized backend development using Node.js and Express, and Implemented SQL queries for database management and optimization.
 </li>
              <li>Collaborated with designers and backend developers to integrate
              RESTful APIs and enhance functionality</li>
              <li>Utilized Git and GitHub for version control and collaborated using Agile methodologies</li>
              
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experince;
