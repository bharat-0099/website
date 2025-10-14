import React from 'react';
import './Edu.css';
import srm from '../../assets/srm.svg';
import uis from '../../assets/uis.svg';
import ms from '../../assets/Masters.pdf';
import btech from '../../assets/Btech.pdf';

const Edu = () => {
    const openCertificate = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };
    return (
        <div id='Education' className='edu'>
            <div className="edu-title">
                <h1>Education</h1>
            </div>
            <div className="edu-container">
                <div className="edu-box">
                    <img src={uis} alt="University of Illinois Springfield" className="university-logo" />
                    <div className="edu-info">
                        <h1>Masters of Science</h1>
                        <b>University of Illinois Springfield</b>
                        
                        <p>Computer Science</p>
                      
                        <p>Aug 2022 to Dec 2023</p>
                        <p>CGPA: 3.8/4</p>
                        <button
          className="download-btn"
          onClick={() => window.open(ms, '_blank')}
        >
          View Transcript
        </button>
                       
                    </div>
                </div>
                {<div className="edu-box">
                    <img src={srm} alt="SRM University" className="university-logo" />
                    <div className="edu-info">
                        <h1>Bachelor's of Technology</h1>
                        <b>SRM University</b>
                       
                        <p>Computer Science (Cyber Security Speclization)</p>
                    
                        <p>Aug 2018 to May 2022</p>
                        <p>CGPA: 7.8/10</p>

                        <button
          className="download-btn"
          onClick={() => window.open(btech, '_blank')}
        >
          View Transcript
        </button>
                    </div>
                </div> }

            </div>
        </div>
    );
};

export default Edu;
