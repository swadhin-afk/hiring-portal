import React from 'react';
import jobs from '../data/jobs.json';
import JobCard from '../components/JobCard';
import './jobList.css';

const JobList = () => (
  <div className="job-list-container">
    <h2 className="job-list-title">🌟 Available Job Listings</h2>
    <div className="job-cards-wrapper">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </div>
);

export default JobList;
