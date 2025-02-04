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
                        <h2>E-Commerce Platform</h2>
                        <ul>
                            <li>Developed a full-stack E-commerce platform using React for a dynamic and responsive UI, Node.js for scalable server-side processing, and MongoDB for NoSQL database management.
                            .</li>
                            <li>Implemented key features such as JWT-based user authentication, product catalog with pagination, shopping cart with Redux state management, and real-time order tracking
                            .</li>
                            <li>Enhanced application performance by optimizing MongoDB queries with indexes and integrating Redis caching for frequently accessed data, reducing server response time.
                            </li>
                            <li>Ensured cross-device compatibility with responsive design principles and achieved seamless UX through integration with payment gateways like Stripe, enabling secure and efficient transactions.
                            </li>
                            <li>Skills: HTML, CSS, REACT, Node.js, Java, JDBC, API, JavaScript</li>
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Heart Disease Prediction</h2>
                        <ul>
                            <li>Designed and implemented a heart disease prediction system using Logistic Regression and Random Forest, leveraging scikit-learn for efficient algorithm deployment.
                            </li>
                            <li>Preprocessed raw medical datasets with techniques like scaling, one-hot encoding, and PCA to reduce dimensionality, and engineered key features such as cholesterol levels, blood pressure, and BMI to enhance predictive accuracy.
                            </li>
                            <li>Achieved a 94% model accuracy through advanced hyperparameter tuning using GridSearchCV and cross-validation, ensuring model robustness and reliability across test datasets.
                            </li>
                            <li>
                            Visualized critical health metrics with Matplotlib and Seaborn, enabling data-driven insights for feature correlation and improving interpretability of the classification results.
                            </li>
                            <li>
                                Skills: Python, Pandas, Machine Learning Algorithms (CNN, Neural Networks, Logistic Regression, SVM, Random Forest)
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Car Dealership</h2>
                        <ul>
                            <li>Designed a comprehensive car dealership platform with features including vehicle listings, search and filtering, user authentication, and order management.</li>
                            <li>Built a responsive front end using JavaFX and Swing, providing a user-friendly interface for enhanced user experience and accessibility.</li>
                            <li>Engineered a robust backend using Java with JDBC for database connectivity and MySQL for data management, ensuring seamless integration and efficient data handling.</li>
                            <p>Skills: Java, Object-Oriented Programming (OOP), MySQL, Java Database Connectivity (JDBC)</p>
                        </ul>
                    </div>
                </div>
                <div className="pro-box">
                    <div className="pro-info">
                        <h2>Library Mangement System</h2>
                        <ul>
                            <li>Established a Java-based library management system, enhancing user experience through a streamlined interface, which increased user engagement.</li>
                            <li>Applied SQL database integration, optimizing data retrieval processes, resulting in a 40% reduction in query response time.</li>
                            <li>Designed and executed unit tests, achieving a defect rate, thereby ensuring high-quality code and system reliability.</li>
                            <li>Coordinated with a team of developers, utilizing Agile methodologies, to deliver the project ahead of schedule.</li>
                            <p>Skills: Java, MySQL, Java Database Connectivity (JDBC), Agile Methodlogy</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;