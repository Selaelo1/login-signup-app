
import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import Logo from '../images/logo512.png';

function WelcomePage() {
  return (
    <div className="welcome-page">
     
      <h1>Welcome to BodyBliss!</h1>
      <p>
        "Your premier destination for fitness, wellness, and community. Explore our classes, trainers, and amenities."
      </p>
       <img src={Logo} alt="BodyBliss Logo" className="logo" />

      <Link to="/signup" className="signup-button" aria-label="Sign up for BodyBliss">
        Sign Up
      </Link>
      <p className="already-have-account">
        Already have an account? Great!
      </p>
      <p>
        <Link to="/login" className="login" aria-label="Log in to BodyBliss">
          Login!
          
        </Link>

      </p>
    </div>
  );
}

export default WelcomePage;



