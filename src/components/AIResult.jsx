import React from 'react';

const AIResult = ({ result }) => (
  <div>
    <h4>Screening Result</h4>
    <p><strong>Name:</strong> {result.name}</p>
    <p><strong>Match Score:</strong> {result.matchScore}%</p>
  </div>
);

export default AIResult;
