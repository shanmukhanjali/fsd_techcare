import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './search.css';

const SearchPage = () => {
  const [url, setUrl] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleScan = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/services/add', { userId, url });
      navigate('/results', { state: { result: response.data } });
    } catch (error) {
      console.error('Error scanning URL:', error);
    }
  };

  return (
    <div className="search-page">
      <h1>TechCare</h1>
      <p>Your go-to solution for device and service health checks.</p>
      <form onSubmit={handleScan}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter the URL"
        />
        <button type="submit">SCAN</button>
      </form>
      <p>Reach Us: techcare@gmail.com</p>
    </div>
  );
};

export default SearchPage;
