import React, { useEffect } from 'react';
import './Experince.css';
import doit from '../../assets/doit.png';
import HDFC from '../../assets/hdfc.png';
import apssdc from '../../assets/apssdc.jpg';
import Truist from '../../assets/truist.png';



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
            <h2>Full Stack Engineer</h2>
            <p>Illinois Department of Innovation & Technology (DoIT), Springfield, IL</p>
            <p>March 2024 - Present </p>
            <p>Project: Citizens Service Modernization platform </p>
            <p>Technologies :  Java, Spring Boot, React.js, React Query, Redux Toolkit, AWS (Lambda, S3, DynamoDB, API
              Gateway), Apache Kafka, Jenkins, Terraform, Docker, GitHub Actions, OAuth2, JWT, GitHub Copilot, JetBrains AI,
              Agile/Scrum </p>
            <ul>
              <li>Engineered high-performance Spring Boot microservices on AWS with Java and DynamoDB, optimizing response
                times for citizen service APIs under heavy traffic.</li>
              <li>Optimized complex React.js UI workflows using React Query and Redux Toolkit across many benefit modules,
                reducing user navigation time.</li>
              <li>Resolved API security challenges by implementing OAuth2, JWT, and IAM policies through API Gateway,
                safeguarding sensitive endpoints and achieving access compliance.</li>
              <li>Cooperated with a 10-member Agile team to integrate Apache Kafka event streams for audit and notification
                pipelines, enhancing system resilience and async processing.</li>
              <li>Automated end-to-end CI/CD using Jenkins, Terraform, Docker, and GitHub Actions, accelerating deployment
                frequency by 40% while maintaining high availability with AWS Lambda and S3.</li>

            </ul>

          </div>
        </div>

        <div className="exp-box">
          <img src={Truist} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Full Stack Engineer</h2>
            <p>Truist Bank</p>
            <p>May 2023 - July 2023</p>
            <p>Project : Customer Data Quality & Verfication Platform</p>
            <p>Technologies : Spring Boot, PostgreSQL, REST APIs, React, MUI, OAuth2, JWT, Playwright, Docker, GitHub Actions,
              AWS S3, EC2, NGINX, Lighthouse, Chrome DevTools, Agile</p>
            <ul>
              <li>Developed microservices for customer data validation, enrichment, and consistency checks using Spring Boot,
                PostgreSQL, and REST APIs, reducing data defects by 28%.</li>
              <li>Engineered React + MUI dashboards for real-time data quality monitoring, enhancing validation accuracy and
                cutting UI form errors.</li>
              <li>Deployed secure role-based access using OAuth2 and JWT, and automated end-to-end testing with Playwright,
                improving cross-browser/UI reliability and CI/CD pipeline stability by 35%.</li>
              <li>Executed Docker-based deployments through GitHub Actions and configured production hosting on AWS S3, EC2,
                and NGINX, achieving uptime and SSL-secured routing.</li>
              <li>Enhanced application performance using Lighthouse and Chrome DevTools, while collaborating in Agile
                ceremonies, conducting code reviews, and supporting sprint planning, resulting in 20% faster feature delivery.</li>
            </ul>
          </div>
        </div>

        <div className="exp-box">
          <img src={HDFC} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Enginner</h2>
            <p>HDFC Bank</p>
            <p>Sep 2021 - May 2022</p>
            <p>Project Name : Digital Loan Platform</p>
            <p> Technologies : Angular, TypeScript, Spring Boot, RESTful APIs, MongoDB, JUnit, Postman, Jenkins, Git, CI/CD</p>
            <ul>
              <li> Constructed a responsive loan origination portal using Angular and TypeScript with Spring Boot microservices,
                enabling seamless onboarding for 15,000+ customers per month.</li>
              <li> Developed and integrated RESTful APIs for account validation and credit scoring, reducing service response times
                across loan processing workflows</li>
              <li> Optimized NoSQL (MongoDB) database design for large-scale loan and customer datasets, improving query
                performance by 40%</li>
              <li>Cooperated with a 6-member cross-functional team to implement secure document verification workflows, cutting
                verification errors.</li>
              <li>Automated end-to-end testing with JUnit and Postman, increasing release efficiency by 25% and ensuring high-
                quality deliverables.</li>
            </ul>
          </div>
        </div>

        <div className="exp-box">
          <img src={apssdc} alt="UIS Logo" className="university-logo" />
          <div className="exp-info">
            <h2>Software Enginner Intern</h2>
            <p>APSSDC </p>
            <p>Sep 2020 - Dec 2020</p>
            <p>Project : Course Managemet platform </p>
            <p>Technologies :  React.js, Axios, Node.js, Express.js, Java Stream APIs, Functional Programming, React Hooks</p>
            <ul>
              <li>Delivered a responsive course management portal using React.js and Axios, scaling the platform to 10,000+
                students and reducing mobile login failures by 30%</li>
              <li>Established backend REST APIs in Node.js and Express.js to automate trainer assignments and course scheduling,
                streamlining workflows for 13 district coordinators.</li>
              <li>Improved complex data-processing logic using Java Stream APIs and functional programming, reducing feature
                delivery timelines during sprints</li>
              <li>Collaborated with a 5-member engineering team to refactor frontend modules, improving development efficiency
                and accelerating release cycles.</li>
              <li>Enhanced React component architecture using hooks and memoization, improving UI responsiveness and reducing
                render delays by 35%</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experince;
