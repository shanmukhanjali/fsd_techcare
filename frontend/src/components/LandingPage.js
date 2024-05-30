import React from 'react';
import { useNavigate } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>TechCare</h1>
      <p>Your go-to solution for device and service health checks.</p>
      <button onClick={() => navigate('/login')}>Login</button>
      <p>New User?</p>
      <button onClick={() => navigate('/signup')}>Register Now!</button>
      <p>Reach Us: techcare@gmail.com</p>
    </div>
  );
};

export default LandingPage;
