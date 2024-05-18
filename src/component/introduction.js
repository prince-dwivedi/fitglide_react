import React, { useState, useEffect } from 'react';
import "../../src/styles/introduction.css";

const Introduction = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(name);
    setName(''); // Reset name after submission
    setShowInput(false); // Hide input box after submit
  };

  useEffect(() => {
    // Show input box after 9 seconds
    const timeout = setTimeout(() => {
      setShowInput(true);
    }, 9000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container">
      <p className="introduction-text fade-in-out delay-1s">But enough about me, I'm eager to learn all about you!</p>
      <p className="introduction-text fade-in-out delay-5s">Before we dive into the world of fitness, let's get acquainted!</p>
      <p className="introduction-text fade-in delay-9s">What's your name?</p>
      {showInput && (
        <form onSubmit={handleSubmit} className="input-container fade-in delay-9s">
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChange}
            className="name-input"
            placeholder="Enter your name"
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Introduction;
