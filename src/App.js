// App.js
import React from 'react';
import './App.css';
import Welcome from '../src/component/welcome';
import Introduction from './component/introduction'; // Import the Introduction component

const App = () => {
  const handleIntroductionSubmit = (name) => {
    console.log(`Hello, ${name}!`);
    // You can add logic here to update the user table in the FitGlide database
  };

  return (
    <div className="App">
      <Welcome />
    </div>
  );
};

export default App;
