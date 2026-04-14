import React from 'react';

const SummaryCard = ({ title, description, subjectColor, rating }) => {
  const starRating = Array.from({ length: 5 }, (_, i) => (
    <span key={i} style={{ color: i < rating ? '#FFD700' : '#CCCCCC' }} className="star">F31F;</span>
  ));

  return (
    <div className="summary-card" style={{ border: `2px solid ${subjectColor}`, padding: '10px', borderRadius: '8px' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="star-rating">
        {starRating}
      </div>
    </div>
  );
};

export default SummaryCard;
