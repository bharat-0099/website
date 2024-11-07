import React from 'react';
import './Skills.css';
import java from '../../assets/java.png';
import JavaScript from '../../assets/JavaScript.png';
import mysql from '../../assets/mysql.png';
import mongodblogo from '../../assets/mongodblogo.png';
import htmll from '../../assets/htmll.png';
import css from '../../assets/css.png';
import react from '../../assets/react.svg';
import bs_ from '../../assets/bs.png';
import nodejs from '../../assets/nodejs.png';
import spring from '../../assets/spring.png';
import gitlogo from '../../assets/gitlogo.png';
import junit from '../../assets/junit.png';

const Skills = () => {
  return (
    <div id='skills' className='myskills'>
      <div className="skill">
        <h1>Skills</h1>
      </div>
      <div className="container">
        <div className="diamond">
          <img src={java} alt="Java logo" className="skill-logo" />
          <img src={JavaScript} alt="JavaScript logo" className="skill-logo" />
          <img src={mysql} alt="MySQL logo" className="skill-logo" />
          <img src={mongodblogo} alt="MongoDB logo" className="skill-logo" />
          <img src={htmll} alt="HTML logo" className="skill-logo" />
          <img src={css} alt="CSS logo" className="skill-logo" />
          <img src={react} alt="React logo" className="skill-logo" />
          <img src={bs_} alt="Bootstrap logo" className="skill-logo" />
          <img src={nodejs} alt="Node.js logo" className="skill-logo" />
          <img src={spring} alt="Spring logo" className="skill-logo" />
          <img src={junit} alt=" logo" className="skill-logo" />
          <img src={gitlogo} alt="GitHub logo" className="skill-logo" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
