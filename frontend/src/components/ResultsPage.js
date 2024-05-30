import React from 'react';
import { useLocation } from 'react-router-dom';
import './results.css';

const ResultsPage = () => {
  const location = useLocation();
  const { result } = location.state;

  return (
    <div className="results-page">
      <h1>TechCare</h1>
      <p>Your go-to solution for device and service health checks.</p>
      <p>Entered URL: {result.url}</p>
      <div>
        <h2>Stats</h2>
        <p>1. Response Size: {result.responseSize / 1024} KB</p>
        <p>2. Response Time: {result.responseTime} ms</p>
        <p>3. Status Code: {result.statusCode}</p>
        <p>4. Time Stamp: {new Date(result.timestamp).toLocaleString()}</p>
      </div>
      <p>Reach Us: techcare@gmail.com</p>
    </div>
  );
};

export default ResultsPage;
