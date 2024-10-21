import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await fetch('http://localhost:5000/users/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to the home/dashboard after login
        navigate('/dashboard'); 
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <section className="login">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="square" style={{'--i': 0}}></div>
        <div className="square" style={{'--i': 1}}></div>
        <div className="square" style={{'--i': 2}}></div>
        <div className="square" style={{'--i': 3}}></div>
        <div className="square" style={{'--i': 4}}></div>
        <div className="square" style={{'--i': 5}}></div>
        <div className="square" style={{'--i': 6}}></div>
        <div className="square" style={{'--i': 7}}></div>
        <div className="square" style={{'--i': 8}}></div>
        <div className="square" style={{'--i': 9}}></div>

        <div className="login-box">
          <form onSubmit={handleSubmit} id="loginForm">
            <h2>Login</h2>

            <div className="input-box">
              <span className="icon">
                <i className="bi bi-person-fill"></i>
              </span>
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label>Email</label>
            </div>

            <div className="input-box">
              <span className="icon">
                <i className="bi bi-key-fill"></i>
              </span>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label>Password</label>
            </div>

            <button className="btnlogin" type="submit">
              Login
            </button>

            {/* Display error message if there's a login error */}
            {error && <div className="error-message">{error}</div>}

            <div className="register-link">
              <p>
                Don't have an account? 
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
