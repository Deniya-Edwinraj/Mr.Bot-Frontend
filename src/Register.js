import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); 
    setError(null); 
    setSuccess(null); 
    
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(data.message);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (err) {
      setError('Something went wrong, please try again.');
    } finally {
      setIsLoading(false); 
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
            <h2>Register</h2>

            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            <div className="input-box">
              <span className="icon"><i className="bi bi-person-fill"></i></span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </div>
            <div className="input-box">
              <span className="icon"><i className="bi bi-envelope-at-fill"></i></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><i className="bi bi-key-fill"></i></span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
            </div>

            <button className="btnlogin" type="submit" disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>

            <div className="register-link">
              <p>Already have an account?  
                <Link to="/login"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default RegisterForm;
