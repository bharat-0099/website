import React from 'react';
import './Footer.css';
import hub from '../../assets/hub.png';
import insta from '../../assets/insta.png';
import mail from '../../assets/mail.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="social">
        <a href="mailto:bharatchundru1@gmail.com">
          <img src={mail} alt="Gmail" className='logo' />
        </a>

        <a href="https://github.com/bharat-0099" target="_blank" rel="noopener noreferrer">
          <img src={hub} alt="GitHub" className='logo' />
        </a>
        <a href="https://www.instagram.com/bharat_0099/">
          <img src={insta} alt="Instagram" className='logo' />
        </a>
        {/*<a href="https://www.linkedin.com/in/bharat-chundru/">
          <img src={linkedin} alt="LinkedIn" className='logo' />
        </a>*/}
      </div>
      <div>
        
      </div>


    </div>
  )
}

export default Footer;
