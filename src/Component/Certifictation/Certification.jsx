import React from 'react';
import './Certification.css';
import Wells from '../../assets/wells.png';
import walmart from '../../assets/walmart.png';
import accen from '../../assets/accen .png';


const Edu = () => {
    const openCertificate = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div id="Education" className="cef">
            <div className="cef-title">
                <h1>Certifications</h1>
            </div>
            <div className="cef-container">
                <div className="cef-box">
                    <img src={walmart} alt="Walmart" className="cef-logo" />
                    <div className="cef-info">
                        <h1>Walmart – Advanced Software Engineering</h1>
                        <p>Credentials ID: RYBbQhkgZv84qFFFf</p>
                        <p>Skills: Data Munging, Data Structures, Java, Python, Relational Database Design, SDLC, UML</p>
                        <button
                            onClick={() =>
                                openCertificate(
                                    'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_9XrWdpnYNDQ7YJcDJ_1737253850506_completion_certificate.pdf'
                                )
                            }
                        >
                            View Certificate
                        </button>
                    </div>
                </div>

                <div className="cef-box">
                    <img src={accen} alt="Accenture" className="cef-logo" />
                    <div className="cef-info">
                        <h1>Accenture - Coding: Development & Advanced Engineering</h1>
                        <p>Credentials ID: YcYhvTixKPSskxwkX</p>
                        <p>Skills: Java, Spring Boot, Software Architecture, Jenkins, CI, DevOps, Agile Methodology</p>
                        <button
                            onClick={() =>
                                openCertificate(
                                    'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/T6kdcdKSTfg2aotxT/XvvYRvb2YpfkyA52H_T6kdcdKSTfg2aotxT_9XrWdpnYNDQ7YJcDJ_1737323625946_completion_certificate.pdf'
                                )
                            }
                        >
                            View Certificate
                        </button>
                    </div>
                </div>

                <div className="cef-box">
                    <img src={Wells} alt="Wells-Fargo" className="cef-logo" />
                    <div className="cef-info">
                        <h1>Wells Fargo - Software Engineering</h1>
                        <p>Credentials ID: dK86L4YtGMMpZ3Txn</p>
                        <p>Skills: Data Modelling, ERD diagram, Java, JPA, Spring, System Design, GitHub</p>
                        <button
                            onClick={() =>
                                openCertificate(
                                    'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/nkmk7gJitYs4TBvoA/9Wvq4L2WCFQDyyPp3_nkmk7gJitYs4TBvoA_9XrWdpnYNDQ7YJcDJ_1737665727598_completion_certificate.pdf'
                                )
                            }
                        >
                            View Certificate
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Edu;
