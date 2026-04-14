import React from 'react';

const SummaryPage = () => {
    return (
        <div>
            <h1>Summary Details</h1>
            <div className="tabs">
                <button>Content</button>
                <button>Flashcards</button>
                <button>OCR</button>
            </div>
            <div className="tab-content">
                {/* Content for the tabs will go here */}
            </div>
        </div>
    );
};

export default SummaryPage;