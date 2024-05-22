import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './component/welcome';
import './App.css';
// import Welcome from '../src/component/welcome';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <Router>
      <div className="App container-fluid">
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
