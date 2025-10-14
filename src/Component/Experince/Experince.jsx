import React, { useEffect } from 'react';
import './Experince.css';
import doit from '../../assets/doit.png';
import apssdc from '../../assets/apssdc.jpg';

import eficens from '../../assets/eficens.png';

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
            <p>March 2024 to Sep 2025</p>
            <p>Application Worked: Citizens Service Modernization platform </p>
            <p>Business usecase: I worked on modernizing the citizen-facing claims and benefits processing platform that functioned like Government CMS Which handles high-traffic requests from government portals. The system needed to be real-time, highly available, and secure, supporting thousands of citizens simultaneously. </p>
            <ul>
              <li>
              Developed scalable Spring Boot microservices on AWS using Java and DynamoDB, improving response times by 60% for hightraffic citizen service APIs.</li>
              <li>
              Rebuilt complex UI workflows using React.js, React Query, and Redux Toolkit to enhance interactivity, which cut development time by 25% across multiple benefit modules.
              </li>
              <li>
              Applied robust authentication and authorization mechanisms (OAuth2, JWT, IAM policies) via API Gateway to safeguard sensitive endpoints and enforce access control.
              </li>
              <li>
              Introduced Apache Kafka-based event streams to decouple components handling audit trails and notifications, resulting in more resilient and asynchronous data pipelines.
              </li>
              <li>
              Automated end-to-end deployment using Terraform, Docker, and GitHub Actions, decreasing manual intervention and accelerating release cycles by 70%.
              </li>
              <li>
              Delivered fault-tolerant serverless services using AWS Lambda, S3, and DynamoDB to streamline application processing and ensure high availability under traffic spikes.
              </li>
            </ul>

          </div>
        </div>

        <div className="exp-box">
          <img src={eficens} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Engineer</h2>
            <p>Eficens Systems</p>
            <p>May 2023 - July 2023</p>
            <p>Application Worked: Employee onboarding portal </p>
            <p>Business usecase: worked on building the employee onboarding portal that every new hire used to complete account creation, role assignment, and compliance documentation. The system had to be secure, user-friendly, and reliable with a 99.9% uptime requirement.</p>
            <ul>
              <li>Built reusable onboarding microservices using Spring Boot and PostgreSQL, improving backend modularity and accelerating user registration processes across core modules.</li>
              <li>Developed responsive dashboards with React, and Material UI, reducing UI-related form errors by 40% and enhancing form validation accuracy across user workflows.</li>
              <li>Integrated OAuth2 and JWT for secure session management and implemented Playwright-based test automation, cutting cross-browser bugs by 35% and increasing CI/CD stability.</li>
              <li>Deployed full-stack apps using Docker and GitHub Actions, publishing frontend on AWS S3 and routing backend via EC2 and NGINX to ensure 99.9% uptime and SSL-secured access.</li>
              <li>Participated in Agile ceremonies and code reviews while optimizing frontend performance with Lighthouse and DevTools, reducing load time by 25% and improving team velocity.</li>
            </ul>
          </div>
        </div>

        <div className="exp-box">
          <img src={apssdc} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Enginner Intern</h2>
            <p>BSNL India</p>
            <p>Sep 2020 - Dec 2020</p>
            <ul>
              <li>Built a responsive course management portal using React.js and Axios, which scaled to support 10,000+ students and reduced login failures on mobile by 30%.</li>
              <li>Engineered backend APIs in Node.js and Express.js to automate trainer assignments and course scheduling, streamlining workflows for district coordinators.</li>
              <li>Simplified complex data processing logic using Java Stream APIs and functional programming, which shortened feature delivery timelines during sprints.</li>
              <li>Reorganized React components using hooks and memorization strategies, which improved app responsiveness and cut render delays by 25%.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experince;
