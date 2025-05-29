import React, { useEffect } from 'react';
import './Experince.css';
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
            <p>Jan 2024 to Present</p>
            <ul>
              <li>Built scalable microservices using Spring Boot and integrated asynchronous processing via @Async and CompletableFuture.</li>
              <li>Developed reusable UI components using React, Redux Toolkit, and Material UI, reducing development time by 25%</li>
              <li>Reduced API latency by 60% through optimized multi-tenant query logic using JPA Specifications and @EntityGraph.
              </li>
              <li>Designed and implemented secure REST APIs with OAuth2, JWT, and API versioning, enabling secure third-party integrations.
              </li>
              <li>Utilized Hibernate framework for object-relational mapping (ORM), including mapping entities to database tables, managing relationships between entities and optimizing database performance through caching and lazy loading strategies.
              </li>
              <li>Designed and maintained CI/CD pipelines using Jenkins and GitHub Actions, accelerating deployment frequency and increasing code quality across environments.
              </li>
              <li>Integrated Docker into CI/CD pipelines using tools like Jenkins and GitHub Actions, automating the build, test, and deployment processes to ensure faster and more reliable  delivery.
              </li>
              <li>Configured AWS Lambda functions for serverless processing and integrated with S3 and DynamoDB for scalable storage.</li>
              <li>Integrated Kafka for event-driven communication, improving system decoupling and resilience.
              </li>
              <li>Created unit and integration tests using JUnit and Mockito, increasing backend code coverage to 85%.
              </li>
              <li>Performed UNIT and integration testing using Jasmine and in writing Test Cases on every latest version before sending it for User Acceptance Test (UAT)
              </li>
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
              <li>Developed enterprise-grade RESTful APIs using Spring Boot, JDBC, and Hibernate, ensuring high performance, scalability, and reliability.
              </li>
              <li>Implemented secure authentication and authorization mechanisms using OAuth2 and JWT to protect API endpoints and manage user access.</li>
              <li>Built dynamic dashboards using React and React Query, enabling real-time data synchronization from backend services for a responsive user experience.
              </li>
              <li>Integrated Elasticsearch to enhance search functionality, enabling faster and more accurate data indexing and retrieval.
              </li>
              <li>Accelerated deployment cycles by 50% through the creation of automated CI/CD pipelines using Jenkins and GitHub Actions.</li>
              <li>Containerized microservices with Docker and supported deployment across Linux environments, ensuring portability and consistent runtime behavior.
              </li>
              <li>Deployed and managed application builds on AWS EC2 instances, with continuous monitoring for uptime, performance, and reliability.
              </li>
              <li>Conducted thorough testing using Postman and JMeter, including test case development and load testing to validate system performance under stress.
              </li>

            </ul>
          </div>
        </div>
        <div className="exp-box">
          <img src={bsnl} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Engineer </h2>
            <p>BSNL </p>
            <p>March 2021 - June 2021</p>
            <ul>
              <li>Developed dynamic, user-friendly dashboards using React.js, improving real-time monitoring of telecom systems.
              </li>
              <li>Used Axios and React Hooks to integrate APIs with frontend components, ensuring seamless user interaction.</li>
              <li>Implemented responsive design using CSS3 and Material UI to support cross-device compatibility.
              </li>
              <li>Refactored backend tools using Java multithreading to improve concurrent telecom request processing.</li>
              <li>Used Collections Framework (HashMap, ArrayList, HashSet) to manage and manipulate in-memory data efficiently.</li>
              <li>Handled exceptions and ensured robust error logging using custom exception handling, try-catch-finally blocks, and Java Logging APIs.
              </li>
              <li>Built RESTful services for internal tool integration and managed secure backend communication.
              </li>
              <li>Conducted code reviews and maintained CI workflows using GitHub Actions, reducing deployment time and errors.</li>
            </ul>
          </div>
        </div>

        <div className="exp-box">
          <img src={apssdc} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Enginner </h2>
            <p>BSNL India</p>
            <p>Sep 2020 - Dec 2020</p>
            <ul>
              <li>Designed and developed responsive front-end UIs using React.js, integrating RESTful APIs for a student training and management platform.
              </li>
              <li>Created backend services using Node.js and Express.js, enabling CRUD operations for training modules and user profiles.</li>
              <li>Wrote optimized SQL queries using JDBC to handle Create, Read, Update, and Delete (CRUD) operations in the database.
              </li>
              <li>Implemented business logic using Java 8+ features such as Lambda expressions, Stream API, and Functional Interfaces to write clean and efficient code.</li>
              <li>Implemented Immutable Objects and Thread-safe Patterns (like synchronized, volatile, and ConcurrentHashMap) to manage shared state across multiple threads.
              </li>
              <li>Used Git SCM for version control and collaborated via pull requests and issue tracking on GitHub.
              </li>
              <li>Automated build and test workflows with GitHub Actions, increasing deployment consistency and improving development velocity
              </li>

            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experince;
