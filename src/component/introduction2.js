import React, { useState } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const Introduction = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameSubmit(name);
    // Add logic to fade out the input and submit button here
  };

  return (
    <div className="introduction">
      <div className="fade-in-text" id="line1">But enough about me, I'm eager to learn all about you!</div>
      <div className="fade-in-text" id="line2">Before we dive into the world of fitness, let's get acquainted!</div>
      <div className="fade-in-text" id="line3">What's your name?</div>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Input
            type="text"
            name="name"
            id="nameInput"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            className="fade-in-input"
          />
        </FormGroup>
        <Button type="submit" className="fade-in-button">Submit</Button>
      </Form>
    </div>
  );
};

export default Introduction;
