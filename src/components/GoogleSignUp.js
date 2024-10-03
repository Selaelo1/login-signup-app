
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './GoogleSignUp.css';

const responseGoogle = (response) => {
  const { profileObj, googleId, accessToken } = response;
  console.log('Profile:', profileObj);
  console.log('Google ID:', googleId);
  console.log('Access Token:', accessToken);

  // Create a new user account or log in existing user
  fetch('/api/auth/google', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ accessToken }),
  })
  .then((res) => res.json())
  .then((data) => {
    // Handle authentication success
    console.log('Authenticated!');
    // Redirect to dashboard
    window.location.href = '/confirmation';
  })
  .catch((error) => {
    // Handle authentication error
    console.error('Authentication error:', error);
  });
};

const GoogleSignUp = () => {
  return (
    <div>
      <GoogleLogin
        clientId="969415123394-eeg1kfjm24b5pth7hj3nb47tc9jcs3bu.apps.googleusercontent.com"
        buttonText="Sign up with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
        className='google-button'
      />
    </div>
  );
};

export default GoogleSignUp;

