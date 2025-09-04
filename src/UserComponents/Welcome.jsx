import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.css";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="page-center">
      <div className="form-box">
        <h1>Welcome to Course Portal</h1>
        <div className="button-group">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Signup</button>
        </div>
      </div>
    </div>
  );
}
