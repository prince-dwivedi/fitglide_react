import React, { useState } from 'react';
import '../../src/styles/successstories.css';
import { testimonialsData } from '../../src/data/testimonialsData';
import leftArrow from '../../src/assets/images/fitglide/leftArrow.png';
import rightArrow from '../../src/assets/images/fitglide/rightArrow.png';
import { motion } from 'framer-motion';

const Successstories = () => {
    const transition = { type: "spring", duration: 0.5 };
    const [selected, setSelected] = useState(0);
    const tlength = testimonialsData.length;

    return (
        <div className='Successstories'>
            <div className='left-t'>
                <span>Success Stories</span>
                <span className='stroke-text'>What Customers</span>
                <span>say about us</span>
                <motion.div
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transition}              
                    className="review-text">
                    {testimonialsData[selected].review}
                </motion.div>
                <span>
                    <span style={{ color: 'orange' }}>
                        {testimonialsData[selected].name}
                    </span> {" "}
                    - {testimonialsData[selected].status}
                </span>
            </div>
            <div className='right-t'>
                <motion.div
                    className='borderbox'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={transition}
                />
                <motion.div
                    className='empty-div'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={transition}
                />
              
                    <motion.img 
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transition}
                        src={testimonialsData[selected].image} 
                        alt="" 
                    />
                
                <div className='arrows'>
                    <img
                        onClick={() => {
                            setSelected(selected === 0 ? tlength - 1 : selected - 1);
                        }}
                        src={leftArrow} 
                        alt="Left Arrow" 
                    />
                    <img
                        onClick={() => {
                            setSelected(selected === tlength - 1 ? 0 : selected + 1);
                        }}
                        src={rightArrow} 
                        alt="Right Arrow" 
                    />
                </div>
            </div>
        </div>
    );
}

export default Successstories;
