import React, { useState, useEffect } from 'react';
import "../../src/styles/diabetesquiz.css";

const questions = [
    {
        question: "Did you know that diabetes increases the risk of which of the following health conditions?",
        options: [
            { id: 'A', text: 'Heart disease' },
            { id: 'B', text: 'Kidney Failure' },
            { id: 'C', text: 'Blindness' },
            { id: 'D', text: 'All of the above' }
        ],
        correctAnswer: 'D',
        encouragement: "Hey there, champ! You're off to a fantastic start! That's spot on! Here's 10 fitcoins to boost your journey to wellness!"
    },
    {
        question: "Did you know that diabetes can lead to nerve damage, causing which of the following symptoms?",
        options: [
            { id: 'A', text: 'Numbness and tingling in hands and feet' },
            { id: 'B', text: 'Excessive thirst and hunger' },
            { id: 'C', text: 'Frequent urination' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'A',
        encouragement: "You're absolutely rocking it! Knowing this is a big step toward a healthier you! Here's another 10 fitcoins to keep you motivated!"
    },
    {
        question: "Did you know that diabetes increases the risk of developing which type of infection?",
        options: [
            { id: 'A', text: 'Urinary tract infections (UTIs)' },
            { id: 'B', text: 'Skin infections' },
            { id: 'C', text: 'Respiratory infections' },
            { id: 'D', text: 'All of the above' }
        ],
        correctAnswer: 'D',
        encouragement: "You're on fire! That's another piece of the puzzle! Way to go! Here's 10 more fitcoins to add to your collection!"
    },
    {
        question: "Did you know that diabetes can lead to complications such as diabetic retinopathy, affecting which part of the body?",
        options: [
            { id: 'A', text: 'Liver' },
            { id: 'B', text: 'Eyes' },
            { id: 'C', text: 'Lungs' },
            { id: 'D', text: 'Stomach' }
        ],
        correctAnswer: 'B',
        encouragement: "You're unstoppable! Knowing this helps you take control of your health! Here's 10 fitcoins to celebrate your wisdom!"
    },
    {
        question: "Did you know that diabetes is a leading cause of which serious condition that affects blood vessels?",
        options: [
            { id: 'A', text: 'Stroke' },
            { id: 'B', text: 'Arthritis' },
            { id: 'C', text: 'Osteoporosis' },
            { id: 'D', text: 'Eczema' }
        ],
        correctAnswer: 'A',
        encouragement: "You're shining bright like a star! Being aware of this is a big step toward a healthier lifestyle! Here's another 10 fitcoins to keep you motivated!"
    },
    {
        question: "Did you know that diabetes can lead to slow wound healing, increasing the risk of which of the following?",
        options: [
            { id: 'A', text: 'Infections' },
            { id: 'B', text: 'Broken bones' },
            { id: 'C', text: 'Hair loss' },
            { id: 'D', text: 'Allergic reactions' }
        ],
        correctAnswer: 'A',
        encouragement: "You're smashing it out there!  Here's 10 fitcoins to fuel your determination!"
    },
    {
        question: "Did you know that regular physical activity such as brisk walking or cycling can help in managing diabetes by which means?",
        options: [
            { id: 'A', text: 'Lowering blood sugar levels' },
            { id: 'B', text: 'Increasing insulin resistance' },
            { id: 'C', text: 'Worsening diabetic symptoms' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'A',
        encouragement: "You're on the right track! A and B are the keys to success! Here's 10 fitcoins to reward your knowledge!"
    },
    {
        question: "Did you know that adopting a healthy diet and maintaining a healthy weight can help in reversing diabetes by which mechanism?",
        options: [
            { id: 'A', text: 'Increasing blood pressure' },
            { id: 'B', text: 'Decreasing cholesterol levels' },
            { id: 'C', text: 'Improving insulin sensitivity' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'C',
        encouragement: "Spot on! A is the way to go! Tracking your intake is a powerful tool! Here's another 10 fitcoins to celebrate your understanding!"
    },
    {
        question: "Did you know that participating in outdoor activities like cycling or swimming can make diabetes management more enjoyable by which means?",
        options: [
            { id: 'A', text: 'Increasing stress levels' },
            { id: 'B', text: 'Decreasing social interaction' },
            { id: 'C', text: 'Reducing anxiety and depression' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'C',
        encouragement: "Absolutely fantastic! Exercise doesn't have to feel like a chore! Keep moving and grooving! Here's 10 fitcoins to fuel your fun!"
    },
    {
        question: "Did you know that participating in cycling or running events with friends or family can enhance diabetes reversal efforts by which mechanism?",
        options: [
            { id: 'A', text: 'Decreasing motivation' },
            { id: 'B', text: 'Increasing sugar cravings' },
            { id: 'C', text: 'Providing social support and accountability' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'C',
        encouragement: "You're unstoppable! Setting goals keeps you moving forward! Here's another 10 fitcoins to celebrate your determination!"
    }
];

const DiabetesQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResponse, setShowResponse] = useState(true); // Initially true to show the first question
    const [encouragement, setEncouragement] = useState('');
    const [fitCoinsEarned, setFitCoinsEarned] = useState(0); // State to track total fitcoins earned

    useEffect(() => {
        if (selectedOption !== null) {
            const currentQuestion = questions[currentQuestionIndex];
            if (selectedOption === currentQuestion.correctAnswer) {
                setEncouragement(currentQuestion.encouragement);
                setFitCoinsEarned(prevCoins => prevCoins + 10); // Increment fitcoins by 10 for correct answer
            } else {
                setEncouragement("Oops! That's not quite right. Keep going!");
            }
            setShowResponse(false); // Hide options when an option is selected
            const encouragementTimeout = setTimeout(() => {
                setEncouragement('');
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setShowResponse(true);
            }, 2000); // Move to next question after 2 seconds
            return () => clearTimeout(encouragementTimeout);
        }
    }, [selectedOption, currentQuestionIndex]);

    const handleOptionChange = (optionId) => {
        setSelectedOption(optionId);
    };

    return (
        <div className="">
            {currentQuestionIndex < questions.length && (
                <>
                    <h3 className={`line fade-in`}>{questions[currentQuestionIndex].question}</h3>
                    {!selectedOption && showResponse && (
                        <div className={`line fade-in row `}>
                            {questions[currentQuestionIndex].options.map(option => (
                                <div key={option.id} className='col-sm-12 col-12 '>
                                    <input
                                        type="radio"
                                        id={`option${option.id}`}
                                        name="option"
                                        value={option.id}
                                        checked={selectedOption === option.id}
                                        onChange={() => handleOptionChange(option.id)}
                                    />
                                    <label htmlFor={`option${option.id}`}>{option.text}</label>
                                </div>
                            ))}
                        </div>
                    )}
                    {encouragement && (
                        <p className={`encouragement `}>{encouragement}</p>
                    )}
                </>
            )}
            {currentQuestionIndex === questions.length && (
                <div className="quiz-completion-message">
                    <p>Woohoo! You’ve aced the quiz and snagged {fitCoinsEarned} FitCoins!</p>
                    <p>Keep it up, champion!</p>
                    <p>Sign up to earn rewards using Fitcoins.🌟</p>
                    
                </div>
            )}
        </div>
    );
};

export default DiabetesQuiz;