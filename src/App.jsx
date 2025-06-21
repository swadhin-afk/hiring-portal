import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JobList from './pages/JobList';
import AdminDashboard from './pages/AdminDashboard';
import CandidateDashboard from './pages/CandidateDashboard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/candidate" element={<CandidateDashboard />} />
    </Routes>
  );
};

export default App;
