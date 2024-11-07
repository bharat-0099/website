import React from 'react';
import './Hero.css';
import profilepicture from '../../assets/profilepicture.png';
import Resume from '../../assets/Resume.pdf';
import hub from '../../assets/hub.png';
import res from '../../assets/res.png';
import linkedin from '../../assets/linkedin.png';

const Hero = () => {
  return (
    <div id="about" className='hero'>
      <img src={profilepicture} alt="profile" className='pics' />
      <h1>I'm Bharat Chundru,</h1>
      <p>
        Computer Science Graduate from University of Illinois Springfield, I hold both a Bachelor's and Master's degree in Computer Science. I have a strong understanding of algorithms, data structures, and software engineering principles through my academic career. I took an active role in projects that strengthened my knowledge of programming languages including Java, Python, and C++ during my education. I refined my problem-solving skills and created a methodical approach to software development through coursework and group projects.
      </p>

      <div className='hero-action'>
        <a href={Resume} download className="hero-resume">
          <img src={res} alt="Resume" />
        </a>
        
        <a href="https://www.linkedin.com/in/bharat-chundru" className='hero-resume'>
          <img  src={linkedin} alt="LinkedIn" /></a>

          <a href="https://github.com/bharat-0099" className='hero-resume'>
          <img  src={hub} alt="Git hub" /></a>
          
        
      </div>
    </div>
  );
}

export default Hero;
