import React from 'react';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaUserAlt, FaUserShield } from 'react-icons/fa';
import './home.css';

const Home = () => (
  <div className="home-wrapper">
    <div className="glass-card">
      <h1>🚀 AI Hiring Platform</h1>
      <p className="tagline">Smarter, Faster, Fairer Hiring — Powered by AI</p>

      <div className="nav-links">
        <Link to="/jobs" className="btn-3d">
          <FaBriefcase className="icon" /> View Jobs
        </Link>
        <Link to="/candidate" className="btn-3d">
          <FaUserAlt className="icon" /> Candidate Portal
        </Link>
        <Link to="/admin" className="btn-3d">
          <FaUserShield className="icon" /> Admin Dashboard
        </Link>
      </div>
    </div>
  </div>
);

export default Home;

