import React from 'react';
import './Hero.css';
import profilepicture from '../../assets/profilepicture.png';
import resume from '../../assets/Bharat Chundru Resume.pdf';
import hub from '../../assets/hub.png';
import res from '../../assets/res.png';
import linkedin from '../../assets/linkedin.png';

const Hero = () => {
  return (
    <div id="about" className='hero'>
      <img src={profilepicture} alt="profile" className='pics' />
      <h1>I'm Bharat Chundru,</h1>
      <p>
        Computer Science professional holding both a Bachelor's and Master's degree from the University of Illinois Springfield. My academic path has equipped me with a deep understanding of algorithms, data structures, and software engineering practices, all essential building blocks for creating efficient, high-quality software solutions.


      </p>
      <p>
      During my studies, I immersed myself in projects that expanded my proficiency in programming languages like Java, Python, and C++. These experiences didn’t just enhance my technical knowledge; they refined my problem-solving skills and instilled in me a structured, methodical approach to development. Whether working solo or within a team, I thrive on tackling complex challenges and bringing ideas to life through code.
      </p>
      <p>
      Now, as an aspiring software Engineer, I’m excited to channel this foundation into impactful, user-centered solutions. Explore my portfolio to discover my skills, projects, and vision as I work towards making a meaningful contribution to the tech world!
      </p>

      <div className='hero-action'>
        <a href={resume} download className="hero-resume">
          <img src={res} alt="Resume" />
        </a>

        <a href="https://www.linkedin.com/in/bharat-chundru" className='hero-resume'>
          <img src={linkedin} alt="LinkedIn" /></a>

        <a href="https://github.com/bharat-0099" className='hero-resume'>
          <img src={hub} alt="Git hub" /></a>


      </div>
    </div>
  );
}

export default Hero;
