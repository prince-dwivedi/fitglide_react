import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './component/welcome';
import SignUp from './component/signup';
import Home from './component/home';
import Product from './component/product';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

const App = () => {
  return (
    <Router>
      <div className="App container-fluid">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<SignUp />} /> {/* Add SignUp route */}
          <Route path="/home" element={<Home />} /> {/* Add SignUp route */}
          <Route path="/product" element={<Product />} /> {/* Add SignUp route */}
        </Routes>
      </div>
    </Router>
  );
};


export default App;
