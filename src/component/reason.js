import React from 'react'
import '../../src/styles/reason.css'
import image1 from '../../src/assets/images/fitglide/image1.png'
import image2 from '../../src/assets/images/fitglide/image2.png'
import image3 from '../../src/assets/images/fitglide/image3.png'
import image4 from '../../src/assets/images/fitglide/image4.png'
import tick from '../../src/assets/images/fitglide/tick.png'
const Reason = () => {
  return (
    <div className="Reasons" id='reasons'>
        <div className="left-r">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
        </div>
        <div className="right-r">
            <span>Some Reasons</span>
            <div>
                <span className='stroke-text'>Why</span>
                <span> choose us</span>
            </div>
           <div className='details-r'>
             <div>
                <img src={tick} alt="" />
                <span>Expert Mentors to guide you</span>
             </div>
             <div>
                <img src={tick} alt="" />
                <span>Customized training plan</span>
             </div>
             <div>
                <img src={tick} alt="" />
                <span>Get 15 days free Trial</span>
             </div>
             <div>
                <img src={tick} alt="" />
                <span>Train at your pace</span>
             </div>
           </div>
        </div>
    </div>
  )
}


export default Reason;
