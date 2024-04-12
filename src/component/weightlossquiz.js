import React, { useState, useEffect } from 'react';
import "../../src/styles/weightlossquiz.css";

const questions = [
    {
        question: "Did you know that being overweight or obese can increase the risk of which of the following conditions?",
        options: [
            { id: 'A', text: 'Type 2 diabetes' },
            { id: 'B', text: 'Heart disease' },
            { id: 'C', text: 'High blood pressure' },
            { id: 'D', text: 'All of the above' }
        ],
        correctAnswer: 'D',
        encouragement: "Hey there, champ! You're off to a fantastic start! That's spot on! Here's 10 fitcoins to boost your journey to wellness!"
    },
    {
        question: "Did you know that carrying extra weight can impact your mental health, leading to higher levels of which of the following?",
        options: [
            { id: 'A', text: 'Depression' },
            { id: 'B', text: 'Anxiety' },
            { id: 'C', text: 'Both A and B' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'C',
        encouragement: "You're absolutely rocking it! Knowing this is a big step toward a healthier you! Here's another 10 fitcoins to keep you motivated!"
    },
    {
        question: "Did you know that being overweight can strain which part of your body and increase the risk of arthritis?",
        options: [
            { id: 'A', text: 'Joints' },
            { id: 'B', text: 'Muscles' },
            { id: 'C', text: 'Bones' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'A',
        encouragement: "You're on fire! That's another piece of the puzzle! Way to go! Here's 10 more fitcoins to add to your collection!"
    },
    {
        question: "Did you know that excess weight can affect which of the following and increase the risk of sleep apnea?",
        options: [
            { id: 'A', text: 'Digestive system' },
            { id: 'B', text: 'Respiratory system' },
            { id: 'C', text: 'Circulatory system' },
            { id: 'D', text: 'None of the above' }
        ],
        correctAnswer: 'B',
        encouragement: "You're unstoppable! Knowing this helps you take control of your health! Here's 10 fitcoins to celebrate your wisdom!"
    },
    {
        question: "Did you know that carrying extra weight can increase the risk of which of the following cancers?",
        options: [
            { id: 'A', text: 'Breast cancer' },
            { id: 'B', text: 'Colon cancer' },
            { id: 'C', text: 'Kidney cancer' },
            { id: 'D', text: 'All of the above' }
        ],
        correctAnswer: 'D',
        encouragement: "You're shining bright like a star! Being aware of this is a big step toward a healthier lifestyle! Here's another 10 fitcoins to keep you motivated!"
    },
    {
        question: "Did you know that obesity can reduce fertility in which of the following?",
        options: [
            { id: 'A', text: 'Men' },
            { id: 'B', text: 'Women' },
            { id: 'C', text: 'Both A and B' },
            { id: 'D', text: 'Neither A nor B' }
        ],
        correctAnswer: 'C',
        encouragement: "You're smashing it out there! Knowing this empowers you to make positive changes! Here's 10 fitcoins to fuel your determination!"
    },
    {
        question: "Did you know that which of the following lifestyle changes can help in losing weight?",
        options: [
            { id: 'A', text: 'Eating smaller portions and more frequently' },
            { id: 'B', text: 'Increasing daily physical activity' },
            { id: 'C', text: 'Consuming more sugary beverages' },
            { id: 'D', text: 'A and B only' }
        ],
        correctAnswer: 'D',
        encouragement: "You're on the right track! A and B are the keys to success! Here's 10 fitcoins to reward your knowledge!"
    },
    {
        question: "Did you know that how can tracking your food intake help with weight loss?",
        options: [
            { id: 'A', text: 'Helps in identifying eating patterns and areas for improvement' },
            { id: 'B', text: 'Increases cravings and leads to overeating' },
            { id: 'C', text: 'Does not impact weight loss efforts' },
            { id: 'D', text: 'A and C only' }
        ],
        correctAnswer: 'D',
        encouragement: "Spot on! A is the way to go! Tracking your intake is a powerful tool! Here's another 10 fitcoins to celebrate your understanding!"
    },
    {
        question: "Did you know that which physical activities can be enjoyable ways to burn calories?",
        options: [
            { id: 'A', text: 'Cycling in the park' },
            { id: 'B', text: 'Running with friends' },
            { id: 'C', text: 'Watching TV for long hours' },
            { id: 'D', text: 'A and B only' }
        ],
        correctAnswer: 'D',
        encouragement: "Absolutely fantastic! Exercise doesn't have to feel like a chore! Keep moving and grooving! Here's 10 fitcoins to fuel your fun!"
    },
    {
        question: "Did you know that how can setting achievable fitness goals enhance motivation?",
        options: [
            { id: 'A', text: 'Helps in tracking progress and celebrating achievements' },
            { id: 'B', text: 'Increases feelings of failure and discouragement' },
            { id: 'C', text: 'Does not impact motivation levels' },
            { id: 'D', text: 'A and C only' }
        ],
        correctAnswer: 'D',
        encouragement: "You're unstoppable! Setting goals keeps you moving forward! Here's another 10 fitcoins to celebrate your determination!"
    }
];

const WeightLossQuiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResponse, setShowResponse] = useState(false);
    const [encouragement, setEncouragement] = useState('');

    useEffect(() => {
        const questionTimeout = setTimeout(() => {
            setShowResponse(true);
        }, 1000); // Show responses after 1 second
        return () => clearTimeout(questionTimeout);
    }, [currentQuestionIndex]);

    const handleOptionChange = (optionId) => {
        setSelectedOption(optionId);
        const currentQuestion = questions[currentQuestionIndex];
        if (optionId === currentQuestion.correctAnswer) {
            setEncouragement(currentQuestion.encouragement);
        } else {
            setEncouragement("Oops! That's not quite right. Keep going!");
        }
        setShowResponse(false); // Hide responses when an option is selected
        const nextQuestionTimeout = setTimeout(() => {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        }, 1000); // Show next question after 1 second
        return () => clearTimeout(nextQuestionTimeout);
    };

    return (
        <div className="weight-loss-quiz">
            {currentQuestionIndex < questions.length && (
                <>
                    <h3 className="question">{questions[currentQuestionIndex].question}</h3>
                    {showResponse && (
                        <div className="options">
                            {questions[currentQuestionIndex].options.map(option => (
                                <div key={option.id}>
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
                    {showResponse && (
                        <p className="encouragement">{encouragement}</p>
                    )}
                </>
            )}
            {currentQuestionIndex === questions.length && (
                <p>Congratulations! You've completed the quiz!</p>
            )}
        </div>
    );
};

export default WeightLossQuiz;
