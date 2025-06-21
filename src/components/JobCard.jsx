import React from 'react';
import './JobCard.css'; // Assuming styles are shared in the same file

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h3 className="job-title">{job.title}</h3>
      <div className="job-detail">
        <strong>📍 Location:</strong> {job.location}
      </div>
      <div className="job-detail">
        <strong>💼 Type:</strong> {job.type || 'Full Time'}
      </div>
      <div className="job-detail">
        <strong>💰 Salary:</strong> {job.salary || 'Negotiable'}
      </div>
      <div className="job-detail">
        <strong>📅 Status:</strong>{' '}
        <span className={`status-badge ${job.status === 'Open' ? 'status-open' : 'status-closed'}`}>
          {job.status}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
