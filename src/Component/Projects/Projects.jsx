import React, { useEffect } from 'react';
import './Projects.css';


const Projects = () => {
    useEffect(() => {
       
        const projectBoxes = document.querySelectorAll('.pro-box');
        projectBoxes.forEach((box, index) => {
            setTimeout(() => {
                box.classList.add('show');
            }, index * 300); 
        });
    }, []);

    return (
        <div id="Projects" className="pro">
            <div className="pro-title">
                <h1>Projects</h1>
            </div>
            <div className="pro-container">
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Threat Intelligence Aggregator</h2>
                        <p>Description: Developed a Java based microservice that automates the ingestion, parsing, and normalization of Indicators of Compromise (IOCs), including IP addresses, file hashes, and domains, from multiple cyber threat intelligence feeds. Integrated correlation logic in MongoDB to detect overlaps across sources and generate confidence scores, enabling Security Operations Center (SOC) teams to prioritize alerts effectively. Enhanced analyst productivity and reduced false positives by enriching threat data with contextual insights, streamlining triage across disparate intelligence platforms.</p>

                        <ul>
                            <li>Designed a Java based application to fetch, parse, and normalize Indicators of Compromise (IOCs) such as IPs, hashes, and domains from multiple threat feeds.</li>
                            <li>Implemented correlation logic in MongoDB to identify overlaps and assign confidence scores for SOC prioritization during alert triage.</li>
                            <li>Improved analyst efficiency by enriching threat context and eliminating false positives across disparate cyber intelligence sources.</li>
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Account Enablement Automation</h2>
                        <p>Project Description: Developed a Java based application using JDBC and JavaMail API to automate account activation workflows and deliver onboarding credentials via email. Designed modular processes with input validation and retry logic to ensure data accuracy and minimize approval cycle delays</p>
                        <ul>
                           <li>Built a user provisioning tool with Java, JDBC, and JavaMail API to automate access approval and email delivery of onboarding credentials.</li>
                            <li>Designed modular workflows with input validation and retry logic to ensure accurate data capture and reduce approval cycle delays.</li>
                            <li>Reduced manual workload by 85% and improved onboarding compliance across HR and IT systems in enterprise environments.</li>
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Secure File Transfer System</h2>
                        <p>Project Description: Built an a Java-based secure file-sharing platform employing AES-256 encryption for data confidentiality and RSA for secure key exchange between endpoints. Implemented SHA-256 hashing for integrity checks and comprehensive audit logging for regulatory compliance</p>
                        <ul>
                            <li>Created a secure file-sharing platform in Java using AES-256 encryption for data confidentiality and RSA for key exchange between endpoints.</li>
                            <li>Applied SHA-256 hashing for integrity verification and logged all file transfers using audit trails for internal compliance.</li>

                        </ul>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Projects;