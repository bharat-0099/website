import React, { useState } from 'react';
import './Navbar.css';



import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
    const [menu, setMenu] = useState("about");

    return (
        <div className='navbar'>
            <p className='nav-p'>Bharat.</p>
            <ul className='nav-menu'>
                <AnchorLink className="anchor-link" offset={50} href='#about'>
                    <li onClick={() => setMenu("about")}>About</li>
                </AnchorLink>
                <AnchorLink className="anchor-link" offset={50} href='#skills'>
                    <li onClick={() => setMenu("skills")}>Skills</li>
                </AnchorLink>
                <AnchorLink className="anchor-link" offset={50} href='#Education'>
                    <li onClick={() => setMenu("Education")}>Education</li>
                </AnchorLink>
                <AnchorLink className="anchor-link" offset={50} href='#Exiperince'>
                    <li onClick={() => setMenu("Experience")}>Experience</li>
                </AnchorLink>
                <AnchorLink className="anchor-link" offset={50} href='#Business'>
                    <li onClick={() => setMenu("Business")}>Business Model</li>
                </AnchorLink>
                <AnchorLink className="anchor-link" offset={50} href='#Projects'>
                    <li onClick={() => setMenu("Projects")}>Projects</li>
                </AnchorLink>
                <AnchorLink className="anchor-link" offset={50} href='#Contact'>
                    <li onClick={() => setMenu("Contact")}>Contact</li>
                </AnchorLink>
            </ul>
            
        </div>
    );
};

export default Navbar;
