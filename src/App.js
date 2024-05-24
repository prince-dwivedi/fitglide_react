import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './component/welcome';
import Homepage from './component/home';
import SignUp from './component/signup';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
    <Router>
      <div className="App container-fluid">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/homepage" element={<Homepage />} /> {/* Add Homepage route */}
          <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
          {/* Add other routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
