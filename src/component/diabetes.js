import React, { useEffect, useState } from 'react'; // Import the useState hook
import "../../src/styles/diabetes.css";

const Diabetes = ({ visitorName }) => {
    const [fade, setFade] = useState(false);

    const capitalizeName = (name) => {
        return name.replace(/\b\w/g, (char) => char.toUpperCase());
    };
    useEffect(() => {
        const lineTimeout1 = setTimeout(() => {
            document.getElementById('line1').classList.add('fade-in');
        }, 1000);

        const lineTimeout2 = setTimeout(() => {
            document.getElementById('line2').classList.add('fade-in');
        }, 2000);

        const lineTimeout3 = setTimeout(() => {
            document.getElementById('line3').classList.add('fade-in');
        }, 3000);

        const lineTimeout4 = setTimeout(() => {
            document.getElementById('line4').classList.add('fade-in');
        }, 4000);

        return () => {
            clearTimeout(lineTimeout1);
            clearTimeout(lineTimeout2);
            clearTimeout(lineTimeout3);
            clearTimeout(lineTimeout4);
        };
    }, []);

    return (
        <div className="diabetes">
            <p id="line1" className="diabetes-text">Congratulations, {capitalizeName(visitorName)}! 🌟 Your fitness journey begins now!</p>
            <p id="line2" className="diabetes-text">By joining us, you're already on the path to success.</p>
            <p id="line3" className="diabetes-text">India is often referred to as the 'Diabetes Capital of the World as it accounts for 17%percent of the total number of diabetes patients in the world. There are currently close to 80 million people with diabetes in India and this number is expected to increase to 135 million by 2045.</p>
            <p id="line4" className="diabetes-text">Get ready to discover how diabetes affects you and how managing it can make you healthier and happier!</p>
        </div>
    );
};

export default Diabetes;
