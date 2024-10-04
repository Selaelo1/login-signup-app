
import React, { useEffect } from 'react';
import './ConfirmationPage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo4 from '../images/logo192.png';

const ConfirmationPage = () => {
  useEffect(() => {
    axios.get('http://localhost:3000/api/routes/confirmation')
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="confirmation-page">
      <div className="container">
        <img src={Logo4} className="logo4" />
        <h1>Thank you for signing up!</h1>
        <p>We're excited to have you join the BodyBliss community.</p>
        <p>A confirmation email has been sent to your email address.</p>
        <button className="login-button">
          <Link to="/login">Log In</Link>
        </button>
        <p>Already have an account? </p>
      </div>
    </div>
  );
};

export default ConfirmationPage;



