import React, { useState } from 'react';
import './resumeUpload.css'; // CSS file

const ResumeUpload = ({ onResult }) => {
  const [file, setFile] = useState(null);

  const handleAIAnalysis = () => {
    const score = Math.floor(Math.random() * 100);
    onResult({ name: file.name, matchScore: score });
  };

  return (
    <div className="resume-upload-box">
      <h3 className="upload-title">Upload Your Resume</h3>

      <input
        type="file"
        accept=".pdf,.docx"
        className="file-input"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && <p className="file-name">Selected: {file.name}</p>}

      <button
        className="analyze-button"
        onClick={handleAIAnalysis}
        disabled={!file}
      >
        Analyze Resume
      </button>
    </div>
  );
};

export default ResumeUpload;
