import React, { useState, useEffect } from 'react';
import WeightLossQuiz from '../../src/component/weightlossquiz';
import "../../src/styles/weightloss.css";

const WeightLoss = ({ visitorName }) => {
    const [showQuiz, setShowQuiz] = useState(false);
    const [showButton, setShowButton] = useState(false); // State to control button visibility
    const [fadeScreen, setFadeScreen] = useState(false); // State to control screen fade-out

    const capitalizeName = (name) => {
        return name.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const handlePlayButtonClick = () => {
        setFadeScreen(true); // Set state to fade out the screen
        setTimeout(() => {
            setShowQuiz(true); // Set state to show the WeightLossQuiz component after half a second
        }, 500);
    };

    useEffect(() => {
        const lineTimeout1 = setTimeout(() => {
            document.getElementById('line1').classList.add('fade-in');
        }, 1000);

        const lineTimeout2 = setTimeout(() => {
            document.getElementById('line2').classList.add('fade-in');
        }, 3000);

        const lineTimeout3 = setTimeout(() => {
            document.getElementById('line3').classList.add('fade-in');
        }, 5000);

        const lineTimeout4 = setTimeout(() => {
            document.getElementById('line4').classList.add('fade-in');
        }, 7000);

        const buttonTimeout = setTimeout(() => {
            setShowButton(true); // Set showButton state to true after 7 seconds
        }, 15000); // Button appears after 9 seconds

        return () => {
            clearTimeout(lineTimeout1);
            clearTimeout(lineTimeout2);
            clearTimeout(lineTimeout3);
            clearTimeout(lineTimeout4);
            clearTimeout(buttonTimeout); // Clear the button timeout on unmount
        };
    }, []);

    return (
        <div>
            {!showQuiz && (
                <div className={`weight-loss ${fadeScreen ? 'fade-out' : ''}`}>
                    <p id="line1" className="weight-loss-text">Congratulations, {capitalizeName(visitorName)}! 🌟 Your fitness journey begins now!</p>
                    <p id="line2" className="weight-loss-text">By joining us, you're already on the path to success.</p>
                    <p id="line3" className="weight-loss-text">India's obesity rates are exploding, rivaling China for the world's #2 spot. Studies show a near-tripling of obesity since 1990, fueled by our changing lifestyles, unhealthy diets, and decreasing physical activity.</p>
                    <p id="line4" className="weight-loss-text">Discover weight's impact, earn FitCoins! Play the game for rewards and start your wellness journey!</p>
                    
                
                {showButton && (
                    <button className="play-button" onClick={handlePlayButtonClick}>Let's Play!</button>
                )}  
                    </div>
                )}
                
            
            {showQuiz && <WeightLossQuiz />}
        </div>
    );
};

export default WeightLoss;
