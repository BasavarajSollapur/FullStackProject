import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentLogin.css';

function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Navigate hook

  const handleLogin = (e) => {
    e.preventDefault();

    // Check student login
    if (username === 'student1' && password === 'student123') {
      alert('Welcome to the Student Dashboard!');
      navigate('/student-dashboard');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="student-login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin} className="student-login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default StudentLogin;
