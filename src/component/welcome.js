import React, { useState, useEffect } from 'react';
import MaxIcon from '../assets/images/max_new.png';
import '../styles/welcome.css';
import Introduction from './introduction';
import Objective from './objective';

const Welcome = () => {
  const [showLines, setShowLines] = useState(false);
  const [visitorName, setVisitorName] = useState(false);
  const [introductionCompleted, setIntroductionCompleted] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(false);

  const [line, setLine] = useState(1);

  useEffect(() => {
    if (line <= 4) {
      setTimeout(() => {
        setLine(line + 1);
      }, 5000);
    }
    if (line ===5) {
      setTimeout(() => {
        console.log("time out", line);
        setShowIntroduction(true);
      },2000);
    }
  }, [line]);

  // useEffect(() => {
  //   const lineTimeout = setTimeout(() => {
  //     setShowLines(true);
  //   }, 1000);

  //   return () => {
  //     clearTimeout(lineTimeout);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (introductionCompleted) {
  //     const introTimeout = setTimeout(() => {
  //       setShowIntroduction(true);
  //     }, 1000); // Change the delay time as needed

  //     return () => {
  //       clearTimeout(introTimeout);
  //     };
  //   }
  // }, [introductionCompleted]);

  const handleIntroductionSubmit = (name) => {
    setVisitorName(name);
    setIntroductionCompleted(true);
  };

  return (
    <div className="row">
      <div className="col-12">
        //<img src={MaxIcon} alt="Max Icon" className="img-fluid" />
      </div>
      <div className="col-12">
        {/* <div className={` ${showLines ? 'fade-in' : 'fade-out'}`}> */}
        {line === 1 && <p className="line fade-in-out delay-1s">Hey there!</p>}
        {line === 2 && <p className="line fade-in-out delay-1s">I'm Max,</p>}
        {line === 3 && (
          <p className="line fade-in-out delay-1s">
            Your virtual fitness companion, and I'm thrilled to welcome you to
            FitGlide!
          </p>
        )}
        {line === 4 && (
          <p className="line fade-in-out delay-1s">
            Together, we're going to embark on an incredible fitness journey.
          </p>
        )}
      </div>
      <div className="col-12">
        {
          showIntroduction &&  !introductionCompleted &&(
            <Introduction onSubmit={handleIntroductionSubmit} />
          ) /* Use the Introduction component */
        }
      {introductionCompleted && (
         <Objective visitorName={visitorName}/>
      )}
      </div>
    </div>
    //   <div className="lines">
    //     <img src={MaxIcon} alt="Max Icon" className="max-icon" />
    //     <div className={`text-container ${showLines ? 'fade-in' : 'fade-out'}`}>
    //       <p className="line fade-in-out delay-1s">Hey there!</p>
    //       <p className="line fade-in-out delay-2s">I'm Max,</p>
    //       <p className="line fade-in-out delay-3s">Your virtual fitness companion, and I'm thrilled to welcome you to FitGlide!</p>
    //       <p className="line fade-in-out delay-4s">Together, we're going to embark on an incredible fitness journey.</p>
    //       </div>
    //    {!showLines && !introductionCompleted &&

    //    <Introduction onSubmit={handleIntroductionSubmit} /> /* Use the Introduction component */
    //    }
    //   {introductionCompleted && (
    //       <Objective visitorName={visitorName}/>
    //     )}
    // </div>
  );
};

export default Welcome;
