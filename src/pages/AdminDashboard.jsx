import React, { useState } from 'react';
import './admin.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobPostings');

  const [jobPostings, setJobPostings] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Bangalore', status: 'Open' },
    { id: 2, title: 'Backend Developer', location: 'Hyderabad', status: 'Closed' },
    { id: 3, title: 'Full Stack Engineer', location: 'Delhi', status: 'Open' },
    { id: 4, title: 'UI/UX Designer', location: 'Remote', status: 'Open' },
  ]);

  const [candidates] = useState([
    { id: 101, name: 'Swati Sharma', job: 'Frontend Developer', score: 87 },
    { id: 102, name: 'Amit Rao', job: 'Backend Developer', score: 91 },
    { id: 103, name: 'Priya Singh', job: 'Full Stack Engineer', score: 76 },
    { id: 104, name: 'Rahul Jain', job: 'UI/UX Designer', score: 95 },
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    location: '',
    status: 'Open',
  });

  const handleJobChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleJobSubmit = (e) => {
    e.preventDefault();
    if (!newJob.title || !newJob.location) {
      alert('Please fill out all fields.');
      return;
    }

    const newJobEntry = {
      id: jobPostings.length + 1,
      ...newJob,
    };

    setJobPostings([...jobPostings, newJobEntry]);
    setNewJob({ title: '', location: '', status: 'Open' });
  };

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2>Admin Dashboard</h2>
        <p>Manage job postings and analyze candidate data here.</p>

        {/* Tab Buttons */}
        <div className="tab-buttons">
          <button
            onClick={() => setActiveTab('jobPostings')}
            className={`tab-button ${activeTab === 'jobPostings' ? 'active' : ''}`}
          >
            Job Postings
          </button>
          <button
            onClick={() => setActiveTab('candidates')}
            className={`tab-button green ${activeTab === 'candidates' ? 'active' : ''}`}
          >
            Candidate Analysis
          </button>
        </div>

        {/* Job Postings */}
        {activeTab === 'jobPostings' && (
          <div>
            <h3>Create New Job</h3>
            <form onSubmit={handleJobSubmit} className="job-form">
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
                <input
                  type="text"
                  name="title"
                  value={newJob.title}
                  onChange={handleJobChange}
                  placeholder="Job Title"
                  className="input"
                />
                <input
                  type="text"
                  name="location"
                  value={newJob.location}
                  onChange={handleJobChange}
                  placeholder="Location"
                  className="input"
                />
                <select
                  name="status"
                  value={newJob.status}
                  onChange={handleJobChange}
                  className="input"
                >
                  <option value="Open">Open</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <button type="submit" className="tab-button active">Add Job</button>
            </form>

            <table>
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Title</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobPostings.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.location}</td>
                    <td>
                      <span className={`status-badge ${job.status === 'Open' ? 'status-open' : 'status-closed'}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Candidates */}
        {activeTab === 'candidates' && (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Candidate ID</th>
                  <th>Name</th>
                  <th>Applied For</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => (
                  <tr key={candidate.id}>
                    <td>{candidate.id}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.job}</td>
                    <td>
                      <span className={`status-badge ${
                        candidate.score >= 85
                          ? 'score-high'
                          : candidate.score >= 70
                          ? 'score-medium'
                          : 'score-low'
                      }`}>
                        {candidate.score}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
