import React, { useState, useEffect } from "react";
import "./Quiz.css";

const Quiz = ({ questions }) => {  // Receive questions as a prop
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
    const [skippedQuestions, setSkippedQuestions] = useState(new Set());
    const [showSubmitPopup, setShowSubmitPopup] = useState(false);
    const [score, setScore] = useState(null);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const handleSelect = (qId, option) => {
        setSelectedAnswers({ ...selectedAnswers, [qId]: option });
        if (skippedQuestions.has(qId)) {
            const updatedSkipped = new Set(skippedQuestions);
            updatedSkipped.delete(qId);
            setSkippedQuestions(updatedSkipped);
        }
    };

    const nextQuestion = () => {
        if (!selectedAnswers[questions[currentQuestion].id]) {
            setSkippedQuestions((prev) => new Set([...prev, questions[currentQuestion].id]));
        }
        setCurrentQuestion((prev) => prev + 1);
    };

    const prevQuestion = () => {
        setCurrentQuestion((prev) => prev - 1);
    };

    const clearResponse = () => {
        handleSelect(questions[currentQuestion].id, "");
    };

    const goToQuestion = (index) => {
        setCurrentQuestion(index);
    };

    const calculateScore = () => {
        let correctCount = 0;
        questions.forEach((question) => {
            if (selectedAnswers[question.id] === question.answer) {
                correctCount++;
            }
        });
        return correctCount;
    };

    const handleSubmit = () => {
        setShowSubmitPopup(true);
    };

    const confirmSubmit = () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setShowSubmitPopup(false);
    };

    const closePopup = () => {
        setShowSubmitPopup(false);
    };

    return (
        <div className="quiz-wrapper">
            <div className="quiz-header">
                <h2>Mock Test</h2>
                <div className="timer">Time Left: {formatTime(timeLeft)}</div>
            </div>

            {score === null ? (
                <div className="abc">
                    <p className="question-text">{currentQuestion + 1}) {questions[currentQuestion].question}</p>
                    <div className="options-container">
                        {questions[currentQuestion].options.map((option) => (
                            <label key={option} className="option-label">
                                <input
                                    className="opt"
                                    type="radio"
                                    name={`question-${questions[currentQuestion].id}`}
                                    value={option}
                                    onChange={() => handleSelect(questions[currentQuestion].id, option)}
                                    checked={selectedAnswers[questions[currentQuestion].id] === option}
                                />
                                {option}
                                
                            </label>
                        ))}
                    </div>
                    <div className="buttons">
                        <button className="previous" onClick={prevQuestion} disabled={currentQuestion === 0}>
                            Previous
                        </button>
                        <button className="next" onClick={nextQuestion} disabled={currentQuestion === questions.length - 1}>
                            Next
                        </button>
                        <button className="clear" onClick={clearResponse}>
                            Clear Response
                        </button>
                    </div>

                    <div className="question-sidebar">
                        <div className="fixed-top">
                            <div className="stats-button">Answered: {Object.keys(selectedAnswers).length}</div>
                            <div className="stats-button">Unanswered: {questions.length - (Object.keys(selectedAnswers).length + skippedQuestions.size)}</div>
                        </div>
                        <div className="fixed-middle">
                            <div className="question-list">
                                {questions.map((q, index) => (
                                    <button
                                        key={q.id}
                                        className={`question-btn ${selectedAnswers[q.id] ? "answered" : skippedQuestions.has(q.id) ? "skipped" : ""}`}
                                        onClick={() => goToQuestion(index)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="fixed-bottom">
                            <button className="submit-btn" onClick={handleSubmit}>Submit Test</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="result-container">
                    <h2>Test Completed!</h2>
                    <p>Your Score: {score} / {questions.length}</p>
                    <p>Correct Answers: {score}</p>
                    <p>Incorrect Answers: {questions.length - score}</p>
                    <p>Unanswered Questions: {questions.length - Object.keys(selectedAnswers).length}</p>
                    <button className="restart-btn" onClick={() => window.location.reload()}>
                        Retake Test
                    </button>
                </div>
            )}

            {showSubmitPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Are you sure you want to submit?</h3>
                        <p>Once submitted, you will be redirected to the result page.</p>
                        <div className="popup-buttons">
                            <button className="yes-btn" onClick={confirmSubmit}>Yes, Submit</button>
                            <button className="no-btn" onClick={closePopup}>No, Continue</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
