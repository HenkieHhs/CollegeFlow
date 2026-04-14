import React, { useState } from 'react';
import './FlashcardView.css';

const FlashcardView = ({ flashcards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const handleNext = () => {
        setFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
    };

    return (
        <div className="flashcard-container">
            <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="front">
                    <h2>{flashcards[currentIndex].question}</h2>
                </div>
                <div className="back">
                    <h2>{flashcards[currentIndex].answer}</h2>
                    <button onClick={handleNext}>Next</button>
                </div>
            </div>
            <div className="progress">Progress: {currentIndex + 1} / {flashcards.length}</div>
        </div>
    );
};

export default FlashcardView;