import React, { useEffect, useState } from 'react';
import "../../src/styles/objective.css";
import Diabetes from "./diabetes";
import WeightLoss from "./weightLoss";

const Objective = ({ visitorName }) => {
    const [fade, setFade] = useState(false);
    const [selection, setSelection] = useState("");

    const capitalizeName = (name) => {
        return name.replace(/\b\w/g, (char) => char.toUpperCase());
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

        const lineTimeout5 = setTimeout(() => {
            document.getElementById('selection-button').classList.add('fade-in');
        }, 11000);

        return () => {
            clearTimeout(lineTimeout1);
            clearTimeout(lineTimeout2);
            clearTimeout(lineTimeout3);
            clearTimeout(lineTimeout5);
        };
    }, []);

    const handleButtonClick = (value) => {
        setFade(true);
        setSelection(value);
    };

    return (
        <div className="container">
            <p id="line1" className="objective-text">Hi {capitalizeName(visitorName)}! Great to meet you! 🌟</p>
            <p id="line2" className="objective-text">Now, tell me, what brings you here today?</p>
            <p id="line3" className="objective-text">Are you looking to shed some pounds and feel your best, or perhaps you're interested in managing diabetes and living a healthier lifestyle?</p>
            
            <div id="selection-button" className={`button-container ${fade ? 'fade-out' : ''}`}>
                <button className="objective-button weight-loss-button" onClick={() => handleButtonClick("Weight")}>Weight Loss</button>
                <button className="objective-button diabetes-button" onClick={() => handleButtonClick("Diabetes")}>Diabetes Management</button>
            </div>
            
            {selection === "Diabetes" && <Diabetes visitorName={visitorName} />}
            {selection === "Weight" && <WeightLoss visitorName={visitorName} />}
        </div>
    );
};

export default Objective;
