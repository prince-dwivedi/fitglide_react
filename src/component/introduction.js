import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import "../../src/styles/introduction.css";


const Introduction = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [fadeOut, setFadeOut] = useState(false); // State to trigger fade out animation
  const [showInput, setShowInput] = useState(false); // State to show input box after third line
  const [line, setLine] = useState(1)

  const handleChange = (e) => {
    setName(e.target.value);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(name);
    // try {
    //   // Send a POST request to update user table with the first name
    //   await axios.post('/api/submit', { firstName: name });
    //   console.log('User updated successfully.');
    //   onSubmit(name); // Pass the name to the parent component
    //   setFadeOut(true); // Trigger fade-out animation
    // } catch (error) {
    //   console.error('Error updating user:', error);
    // }
  };
  useEffect(() => {
    if (line <= 4) {
      setTimeout(() => {
        setLine(line + 1);
      }, 5000);
    }
  }, [line]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowInput(true); // Show input box after 5 seconds
  //   }, 5000);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <div>
      {line === 1 && (
        <p className="line fade-in-out delay-1s">
          But enough about me, I'm eager to learn all about you!
        </p>
      )}
      {line === 2 && (
        <p className="line fade-in-out delay-1s">
          Before we dive into the world of fitness, let's get acquainted!
        </p>
      )}
      {line >= 3 && (
        <p className="line fade-in delay-1s">
          What's your name?
        </p>
      )}
      {line >= 4 && (
        <form onSubmit={handleSubmit} className="line fade-in delay-1s">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
             className="name-input"
          />
          <button type="submit" className="btn btn-primary m-1 ">
            Submit
          </button>
        </form>
      )}
    </div>
    // <div className={`${fadeOut ? 'fade-out' : ''}`}>
    //   <p className="introduction-text fade-in" onAnimationEnd={() => setShowInput(true)}>But enough about me, I'm eager to learn all about you!</p>
    //   <p className="introduction-text fade-in">Before we dive into the world of fitness, let's get acquainted!</p>
    //   <p className="introduction-text fade-in">What's your name?</p>
    //   {showInput && (
    //     <form onSubmit={handleSubmit} className="input-container fade-in delayed">
    //       <input type="text" id="name" value={name} onChange={handleChange} className="name-input" />
    //       <button type="submit" className="submit-button">Submit</button>
    //     </form>
    //   )}
    // </div>
  );
};

export default Introduction;
