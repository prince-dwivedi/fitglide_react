import React from 'react'
import '../../src/styles/footer.css'
import facebook from '../../src/assets/images/fitglide/facebook (1).png'
import Instagram from '../../src/assets/images/fitglide/instagram.png'
import youtube from '../../src/assets/images/fitglide/youtube.png'
import logo from '../../src/assets/images/fitglide/fitglide-logo.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <hr/>
      <div className='footer'>
        <div className='social-links'>
            <img src={facebook} alt="" />
            <img src={Instagram} alt="" />
            <img src={youtube} alt="" />
        </div>
        <div className='logo-f'>
        <img src={logo} alt="" />
      </div>
      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer;
