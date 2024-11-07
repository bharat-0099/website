import React from 'react'
import './Projects.css';
const Projects = () => {
    return (
        <div id="Projects"className='pro'>
            <div className="pro-title">
                <h1>Projects</h1>
            </div>
            <div className="pro-container">
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Library Management System</h2>
                        <ul>
                            <li>Established a Java-based library management system, enhancing user experience through a streamlined interface, which increased user engagement.</li>
                            <li>Applied SQL database integration, optimizing data retrieval processes.</li>
                            <li> Designed and executed unit tests, achieving a defect rate, thereby ensuring high-quality code and system reliability</li>
                            <p>Skills : JAVA,Java Database Connectivity(JDBC),Agile Methodologies,SQL </p>
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>E-Commence Platform</h2>
                        <ul>
                            <li>Designed a comprehensive e-commerce platform with features including shopping carts, order management, user authentication, and product browsing.</li>
                            <li>Built a responsive front end using Redux, React.js, HTML5, and CSS3, enhancing user experience and accessibility</li>
                            <li> Engineered a robust backend using the JDBC API, MySQL, Express.js, and Node.js frameworks, ensuring seamless integration and data management</li>
                            <p>Skills :  HTML,CSS,Java,Java Database Connectivity(JDBC),JavaScript,MySQL,React,Application Programming Interfaces (API),Node.js,Express.js </p>
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Car Dealership</h2>
                        <ul>
                            <li> Designed a comprehensive car dealership platform with features including vehicle listings, search and filtering, user authentication, and order management.</li>
                            <li>Built a responsive front end using JavaFX and Swing, providing a user-friendly interface for enhanced user experience and accessibility</li>
                            <li> Engineered a robust backend using Java with JDBC for database connectivity and MySQL for data management, ensuring seamless integration and efficient data handling</li>
                            <p>Skills : Java,Object-Oriented Programming(OOP),MySQL,Java Database Connectivity(JDBC)</p>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
