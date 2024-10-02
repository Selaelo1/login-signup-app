import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import Logo from '../images/logo512.png'

function WelcomePage() {
  return (
    <div className="welcome-page">
      <div className="container">
        <h1>Welcome to BodyBliss! </h1>
        <p>"Your premier destination for fitness, wellness, and community. Explore our classes, trainers, and amenities."</p>
        <img src={Logo} alt="BodyBliss Logo" className="logo" />

        <div className="buttons">
          <Link to="/signup" className="signup-button">Sign Up</Link>
         
        </div>
        <p className="already-have-account">Already have an account? Great!
        
        </p>
        <p>
          <Link to="/login" className="login-button">Log in then </Link>
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;

