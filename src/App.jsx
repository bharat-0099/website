import React from 'react'
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Edu from "./Component/Edu/Edu";
import Skills from "./Component/Skills/Skills";
import Experince from "./Component/Experince/Experince";
import Business from "./Component/Business/Business";
import Projects from "./Component/Projects/Projects";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Certification from "./Component/Certifictation/Certification";


function App() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Skills/>
    <Edu/>
    <Experince/>
    <Certification/>
    <Business/>
    <Projects/>
    <Contact/>
    <Footer/>
    
    </div>
  )
}

export default App
