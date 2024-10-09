import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function RegisterForm() {
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
          <form  id="loginForm">
            <h2>Register</h2>
            <div className="input-box">
              <span className="icon">
              <i className="bi bi-person-fill"></i>              
              </span>
              <input
                type="email"
                required
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="input-box">
              <span className="icon">
              <i class="bi bi-envelope-at-fill"></i>
              </span>
              <input
                type="email"
                required
                // value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"><i className="bi bi-key-fill"></i></span>
              <input
                type="password"
                required
                // value={password}
                // onChange={(event) => setPassword(event.target.value)}
              />
              <label>Password</label>
            </div>

            <button className="btnlogin" type="submit">
              Register
            </button>

            {/* Display error message if there's a login error */}
            {/* {loginError && <div className="error-message">{loginError}</div>} */}

            <div className="register-link">
              <p>
                Don't have an account?  
                <Link to="/login">
                  <a href="login" id="toggleLogin">
                     Login
                  </a>
               </Link>              </p>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}

export default RegisterForm;