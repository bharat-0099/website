import React from 'react';
import './Edu.css';
import srm from '../../assets/srm.svg';
import uis from '../../assets/uis.svg';

const Edu = () => {
    return (
        <div id='Education' className='edu'>
            <div className="edu-title">
                <h1>Education</h1>
            </div>
            <div className="edu-container">
                <div className="edu-box">
                    <img src={uis} alt="University of Illinois Springfield" className="university-logo" />
                    <div className="edu-info">
                        <h1>Masters</h1>
                        <p>University of Illinois Springfield</p>
                        <p>Aug 2022 to Jan 2024</p>
                        <p>GPA: 3.8</p>
                    </div>
                </div>
                <div className="edu-box">
                    <img src={srm} alt="SRM University" className="university-logo" />
                    <div className="edu-info">
                        <h1>Bachelor's</h1>
                        <p>SRM University</p>
                        <p>Aug 2018 to May 2022</p>
                        <p>GPA: 3.6</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Edu;
