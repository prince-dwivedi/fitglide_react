import React from 'react'
import '../../src/styles/programs.css'
import { programsData } from '../../src/data/programsData'
import RightArrow from '../../src/assets/images/fitglide/rightArrow.png'

const Programs = () => {
  return (
    <div className='Programs' id="programs">
      {/*header*/}
      <div className='programs-header'>
        <span className='stroke-text'>Programs</span>
        <span>crafted</span>
        <span className='stroke-text'>for complete Wellness</span>
      </div>
      <div className='program-categories'>
        {programsData.map((program)=>(
          <div className="category"> 
          {program.image}
          <span>{program.heading}</span>{program.details}<span></span>
          <div className="join-now"><span>Join Now</span><img src={RightArrow} alt=""/></div>
          </div>
        ))}

      </div>
    </div>
  )
}
export default Programs;
