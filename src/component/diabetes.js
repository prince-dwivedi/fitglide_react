import React, { useEffect, useState } from 'react'; // Import the useEffect and useState hooks
import DiabetesQuiz from '../../src/component/diabetesquiz'; // Corrected import path
import "../../src/styles/diabetes.css";

const Diabetes = ({ visitorName }) => {
    const [showButton, setShowButton] = useState(false); // State to control button visibility
    const [showQuiz, setShowQuiz] = useState(false); // State to control quiz visibility
    const capitalizeName = (name) => {
        return name.replace(/\b\w/g, (char) => char.toUpperCase());
    };

    const handlePlayButtonClick = () => {
        setShowQuiz(true); // Set showQuiz state to true when the button is clicked
    };

    useEffect(() => {
        const lineTimeout1 = setTimeout(() => {
            document.getElementById('line1').classList.add('fade-in');
        }, 1000);

        const lineTimeout2 = setTimeout(() => {
            document.getElementById('line2').classList.add('fade-in');
        }, 5000);

        const lineTimeout3 = setTimeout(() => {
            document.getElementById('line3').classList.add('fade-in');
        }, 7000);

        const lineTimeout4 = setTimeout(() => {
            document.getElementById('line4').classList.add('fade-in');
        }, 9000);

        const buttonTimeout = setTimeout(() => {
            setShowButton(true); // Set showButton state to true after 9 seconds
        }, 15000); // Button appears after 9 seconds

        return () => {
            clearTimeout(lineTimeout1);
            clearTimeout(lineTimeout2);
            clearTimeout(lineTimeout3);
            clearTimeout(lineTimeout4);
            clearTimeout(buttonTimeout);
        };
    }, []);

    return (
        <div className="diabetes">
            {showQuiz ? (
                <DiabetesQuiz />
            ) : (
                <>
                    <p id="line1" className="diabetes-text">Congratulations, {capitalizeName(visitorName)}! 🌟 Your fitness journey begins now!</p>
                    <p id="line2" className="diabetes-text">By joining us, you're already on the path to success.</p>
                    <p id="line3" className="diabetes-text">India is often referred to as the 'Diabetes Capital of the World as it accounts for 17% of the total number of diabetes patients in the world. There are currently close to 80 million people with diabetes in India and this number is expected to increase to 135 million by 2045.</p>
                    <p id="line4" className="diabetes-text">Discover the impact of diabetes through gameplay and earn FitCoins while learning to manage it for a healthier, happier life!</p>
                    {showButton && ( // Conditionally render the button
                        <button className="play-button fade-in" onClick={handlePlayButtonClick}>Let's Play!</button>
                    )}
                </>
            )}
        </div>
    );
};

export default Diabetes;
