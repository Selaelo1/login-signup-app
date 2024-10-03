

import React, { useState } from 'react';
import axios from 'axios';
import GoogleSignUp from './GoogleSignUp';
import './SignUpPage.css';
import Logo2 from '../images/logo192.png';

axios.defaults.baseURL = 'http://localhost:3000';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    if (!email) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    if (password.length < 8) errors.password = 'Password must be at least 8 characters';
    if (password !== confirmPassword) errors.confirmPassword = 'Passwords do not match';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        name,
        email,
        password,
      })

      const { data } = response;
      console.log(data);
      window.location.href = '/api/confirmation';
    } catch (error) {
      console.error(error);
      setErrors({ serverError: error.message });
    }
  };

  return (
    <div className="signup-page">
      <div className="container">
        <img src={Logo2} alt="BodyBliss Logo" className="logo2" />
        <h1>Sign Up</h1>
        <p>Join the Body Bliss community today!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="input-field"
          />
          {errors.name && <div className="error">{errors.name}</div>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="input-field"
          />
          {errors.email && <div className="error">{errors.email}</div>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-field"
          />
          {errors.password && <div className="error">{errors.password}</div>}
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="input-field"
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
          {errors.serverError && <div className="error">{errors.serverError}</div>}
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <GoogleSignUp />
      </div>
    </div>
  );
};

export default SignUpPage;




