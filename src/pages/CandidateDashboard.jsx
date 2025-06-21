import React, { useState } from 'react';
import ResumeUpload from '../components/ResumeUpload';
import AIResult from '../components/AIResult';
import './candidate.css';
const CandidateDashboard = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="container">
      <h2>Candidate Dashboard</h2>
      <ResumeUpload onResult={setResult} />
      {result && <AIResult result={result} />}
    </div>
  );
};

export default CandidateDashboard;
