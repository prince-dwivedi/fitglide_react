import React, { useEffect } from 'react';
import "../../src/styles/objective.css";

const Objective = ({ visitorName }) => {
  useEffect(() => {
    const lineTimeout1 = setTimeout(() => {
      document.getElementById('line1').classList.add('fade-in');
    }, 1000);

    const lineTimeout2 = setTimeout(() => {
      document.getElementById('line2').classList.add('fade-in');
    }, 2000);

    const lineTimeout3 = setTimeout(() => {
      document.getElementById('line3').classList.add('fade-in');
    }, 3000);

    return () => {
      clearTimeout(lineTimeout1);
      clearTimeout(lineTimeout2);
      clearTimeout(lineTimeout3);
    };
  }, []);

  return (
    <div className="objective">
      <p id="line1" className="objective-text">Hi {visitorName}! Great to meet you! 🌟</p> {/* Use visitorName prop */}
      <p id="line2" className="objective-text">Now, tell me, what brings you here today?</p>
      <p id="line3" className="objective-text">Are you looking to shed some pounds and feel your best, or perhaps you're interested in managing diabetes and living a healthier lifestyle?</p>
      <div className="button-container">
        <button className="objective-button weight-loss-button">Weight Loss</button>
        <button className="objective-button diabetes-button">Diabetes Management</button>
      </div>
    </div>
  );
};

export default Objective;
