import React, { useEffect } from 'react';
import './Experince.css';
import kube from '../../assets/kube.png';
import uis from '../../assets/uis.svg';
import doit from '../../assets/doit.png';
import apssdc from '../../assets/apssdc.jpg';

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
            <p>March 2024 to Present</p>
            <ul>
              <li>Developed responsive user interfaces using HTML5, CSS3, and Bootstrap Grid System, leveraging Flexbox and media queries to ensure cross-device compatibility and enhanced accessibility.</li>
              <li>Reduced code redundancy by 25% by implementing reusable React components using React Hooks (useState, useEffect) and optimizing state management with Redux Toolkit, including reducers, middleware, and selectors.</li>
              <li>Built a high-concurrency payment processing system using Spring Boot Async Programming with @Async and CompletableFuture, improving throughput by 40%. Utilized ThreadPoolTaskExecutor to optimize thread management and avoid bottlenecks during bulk API calls.</li>
              <li>Solved slow database queries in a multi-tenant application by implementing Spring Data JPA Specifications with dynamic query filters and @EntityGraph for lazy loading, reducing query time by 60%.</li>
              <li>Enhanced deployment frequency by 50% through Agile methodologies, actively participating in sprint planning, backlog grooming, and performing pull request (PR) reviews using tools like Bitbucket and GitHub.
              </li>
              <li>Automated CI/CD pipelines with Jenkins, configuring pipeline scripts (Jenkinsfile) to automate builds, run unit tests with JUnit 5, and deploy artifacts to Nexus Repository Manager. Utilized Docker to containerize applications for consistent deployments across environments on EKS.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
          <img src={uis} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Event Cordinator</h2>
            <p>University of Illinois Springfield</p>
            <p>Dec 2022 to Nov 2023</p>
            <ul>
              <li>Event Planning: Organizing cultural, educational, and recreational events that represent culture while fostering inclusivity among the student community.</li>
              <li>Budget Management: Planning event budgets efficiently and seeking funding or sponsorships when necessary.</li>
              <li>Volunteer Management: Recruiting, training, and managing volunteers to support event execution.</li>
            </ul>
          </div>
        </div>
        <div className="exp-box">
        <img src={apssdc} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Engineer Intern</h2>
            <p>Andhra Pradesh State Development Skill Corporation (APSSDC)</p>
            <p>Jun 2022 to Aug 2022</p>
            <ul>
              <li>Designed and maintained web applications using HTML5, CSS3, and JavaScript, integrating AJAX for real-time updates and optimizing backend logic with Java EE Servlets, JSP, and JDBC, achieving a 30% performance boost in request handling.</li>
              <li>Built a job portal with modular features such as JWT-based authentication, OAuth2 login integration, and role-based access control (RBAC). Enhanced search functionalities with Elasticsearch and filter-based indexing, reducing search latency by 40%</li>
              <li>Optimized database performance by using Hibernate Criteria API and implementing HikariCP connection pooling, reducing query execution time by 25% and improving transaction efficiency.</li>
              <li>Developed an automated testing framework using JUnit for backend unit testing and integrated Maven build profiles for environment-specific configurations, ensuring efficient builds and consistent test coverage.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experince;
