import React from 'react';
import '../../src/styles/fitglide.css';
import Header from '../../src/component/header'; // Adjusted path
import Programs from '../../src/component/programs';
import hero_image from '../../src/assets/images/fitglide/hero_image.png';
import hero_image_back from '../../src/assets/images/fitglide/hero_image_back.png';
import Heart from '../../src/assets/images/fitglide/heart.png';
import Calories from '../../src/assets/images/fitglide/calories.png';
import { motion } from 'framer-motion'; // Importing motion correctly

const Fitglide = () => {
    const transition = { type: 'spring', duration: 3 };

    return (
        <div className='hero'>
            <div className='blur hero-blur'></div>
            <div className="left-h">
                <Header />
                <div className='myadd'>
                    <motion.div
                        initial={{ left: 238 }}
                        whileInView={{ left: 8 }}
                        transition={{ ...transition, type: 'tween' }}
                    />
                    <span>Join us to be the biggest loser</span>
                </div>
                {/* hero heading*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text'>Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal Body</span>
                    </div>
                    <div>
                        <span>At FitGlide, we’re not just about workouts; we’re about Transformation. Are you ready to transform yourself?</span>
                    </div>
                </div>
                {/*numbers*/}
                <div className="figures">
                    <div>
                        <span>Exercise</span>
                        <span>Choose workout</span>
                    </div>
                    <div>
                        <span>Nutrition</span>
                        <span>Balance Diet</span>
                    </div>
                    <div>
                        <span>Dedication</span>
                        <span>Fixing Routine</span>
                    </div>
                </div>
                {/*hero buttons*/}
                <div className="hero-buttons">
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Know More</button>
                </div>
            </div>
            <div className="right-h">
                <button className='btn'>Join Now</button>
                <motion.div
                    className='heart-rate'
                    initial={{ right: '-2rem' }}
                    whileInView={{ right: '3rem' }}
                    transition={transition}
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                {/*hero images*/}
                <img
                    src={hero_image}
                    alt=""
                    className="hero-image"
                />
                <motion.img
                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                />
                {/*Calories*/}
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>2000 Kcal</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fitglide;

