import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles/header.css';
import Logo from '../../src/assets/images/fitglide/fitglide-logo.png';




const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="Logo" />
      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why Us</li>
        <li>Plans</li>
        <li>Success Stories</li>
      </ul>
    </div>
  );
}

export default Header;
