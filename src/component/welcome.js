/* welcome.js */
import React, { useState, useEffect } from 'react';
import MaxIcon from '../assets/images/max_new.png';
import '../styles/welcome.css';
import Introduction from './introduction';
import Objective from '../component/objective';

const Welcome = () => {
  const [showLines, setShowLines] = useState(true);
  const [visitorName, setVisitorName] = useState(false);
  const [introductionCompleted, setIntroductionCompleted] = useState(false);

  useEffect(() => {
    const lineTimeout = setTimeout(() => {
      setShowLines(false);
    }, 21000);

    return () => {
      clearTimeout(lineTimeout);
    };
  }, []);

  useEffect(() => {
    if (introductionCompleted) {
      const introTimeout = setTimeout(() => {
        // setShowIntroduction(true); // This line is commented out as it's not being used
      }, 1000); // Change the delay time as needed

      return () => {
        clearTimeout(introTimeout);
      };
    }
  }, [introductionCompleted]);
  
  const handleIntroductionSubmit = (name) => {
    setVisitorName(name);
    setIntroductionCompleted(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <img src={MaxIcon} alt="Max Icon" className="max-icon img-fluid" />
          {showLines && 
            <div className="text-container">
              <p className="line fade-in-out delay-1s">Hey there!</p>
              <p className="line fade-in-out delay-2s">I'm Max,</p>
              <p className="line fade-in-out delay-3s">Your virtual fitness companion, and I'm thrilled to welcome you to FitGlide!</p>
              <p className="line fade-in-out delay-4s" onAnimationEnd={() => console.log(true)}>Together, we're going to embark on an incredible fitness journey.</p>
            </div>
          }
          {!showLines && !introductionCompleted &&
            <Introduction onSubmit={handleIntroductionSubmit} />
          }
          {introductionCompleted && (
            <Objective visitorName={visitorName}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
