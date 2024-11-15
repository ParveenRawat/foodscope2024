import React, { useState } from 'react';

const Quiz = () => {
    // Mock question data
    const question = {
        id: 1,
        question: "Where does the dish 'Sushi' originate from?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        correctAnswer: "Japan",
        explanation: "Sushi originated in Japan as a method of preserving fish.",
    };
    
    // States for user's answer, result, and streak
    const [userAnswer, setUserAnswer] = useState('');
    const [result, setResult] = useState(null);
    const [streak, setStreak] = useState(3); // Mock streak data

    // Handle answer submission
    const submitAnswer = () => {
        if (userAnswer === question.correctAnswer) {
            setResult('Correct!');
            setStreak(streak + 1); // Increment streak for correct answer
        } else {
            setResult('Incorrect.');
        }
    };

    return (
        <div className="min-h-screen bg-[#FFF9ED] p-6">
            <h2 className="text-3xl font-bold text-center text-[#333333] mb-8">Daily Quiz</h2>

            {/* Display Question */}
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-bold text-[#4D5D4B] mb-4">{question.question}</h3>
                {question.options.map((option, index) => (
                    <label key={index} className="block text-left my-2">
                        <input
                            type="radio"
                            name="answer"
                            value={option}
                            onChange={() => setUserAnswer(option)}
                            className="mr-2"
                        />
                        {option}
                    </label>
                ))}
                <button
                    onClick={submitAnswer}
                    className="mt-4 py-2 px-6 bg-[#E27D60] text-white font-bold rounded hover:bg-[#C2583A] transition duration-300"
                >
                    Submit Answer
                </button>
            </div>

            {/* Display Result */}
            {result && (
                <div className="text-center mt-4 text-lg text-[#333333]">
                    <p>{result}</p>
                    {result === 'Correct!' && (
                        <p>
                            {question.explanation}
                            <br />
                            Your streak is now <span className="font-bold">{streak}</span> days!
                        </p>
                    )}
                </div>
            )}

            {/* Streak Display */}
            <div className="text-center mt-8">
                <p className="text-xl font-bold text-[#4D5D4B]">Current Streak: {streak} days</p>
            </div>
        </div>
    );
};

export default Quiz;
