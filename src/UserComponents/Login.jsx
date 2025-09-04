import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:8080/api/users/get', {
      headers: {
        'Authorization': 'Basic ' + btoa(email + ':' + password),
      },
    });
    if (res.ok) navigate('/courses');
    else alert('Invalid credentials');
  };

  return (
    <div className="page-center-login">
    <div className="form-container">
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
}
