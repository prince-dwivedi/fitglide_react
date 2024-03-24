// Introduction.js
import React, { useState } from 'react';
import "../../src/styles/introduction.css"

const Introduction = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <div className="introduction">
      <p className="introduction-text">But enough about me, I'm eager to learn all about you!</p>
      <p className="introduction-text">Before we dive into the world of fitness, let's get acquainted!</p>
      <form onSubmit={handleSubmit} className='introduction-text'>
        <label htmlFor="name" className=''>What's your name?</label>
        <input type="text" id="name" value={name} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Introduction;
