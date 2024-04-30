/* welcome.js */
import React, { useState, useEffect } from 'react';
import MaxIcon from '../assets/images/max_new.png';
import '../styles/welcome.css';
import Introduction from '../component/introduction';
import Objective from '../component/objective';

const Welcome = () => {
  const [showLines, setShowLines] = useState(true);
  const [visitorName, setVisitorName] = useState(false);
  const [introductionCompleted, setIntroductionCompleted] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);

  useEffect(() => {
    const lineTimeout = setTimeout(() => {
      setShowLines(false);
    }, 21000);


    return () => {
      clearTimeout(lineTimeout);
    };
  }, []);
  // useEffect(() => {
  //   const lineTimeout = setTimeout(() => {
  //     alert('sddsdsdsdsds')
  //   }, 24000);


  //   return () => {
  //     clearTimeout(lineTimeout);
  //   };
  // }, []);

  useEffect(() => {
    if (introductionCompleted) {
      const introTimeout = setTimeout(() => {
        setShowIntroduction(true);
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
    <div className="lines">
      <img src={MaxIcon} alt="Max Icon" className="max-icon" />
      {showLines && 
      <div className={`text-container `}  >
        <p className="line fade-in-out delay-1s">Hey there!</p>
        <p className="line fade-in-out delay-2s">I'm Max,</p>
        <p className="line fade-in-out delay-3s">Your virtual fitness companion, and I'm thrilled to welcome you to FitGlide!</p>
        <p className="line fade-in-out delay-4s" onAnimationEnd={() => console.log(true)}>Together, we're going to embark on an incredible fitness journey.</p>
      </div>
      }
     {!showLines && !introductionCompleted &&
     
     <Introduction onSubmit={handleIntroductionSubmit} /> /* Use the Introduction component */
     }
    {introductionCompleted && (
        <Objective visitorName={visitorName}/>
      )}
  </div>
 
  );
};

export default Welcome;
