import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../globals.css';
import witsImage from '../../images/wits.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); // State to handle errors
  const navigate = useNavigate(); // Use navigate instead of history.push

  const { firstName, email, surname, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = async e => {
  //   e.preventDefault();

  //   const newUser = {
  //     firstName,
  //     surname,
  //     email,
  //     password
  //   };

  //   try {
  //     const res = await fetch('/api/auth/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(newUser)
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       navigate('/login'); // Redirect to the login page upon successful signup
  //     } else {
  //       setError(data.msg); // Set the error message if signup fails
  //     }
  //   } catch (err) {
  //     console.error(err.message);
  //     setError('An error occurred. Please try again later.');
  //   }
  // };

  const onSubmit = async e => {
  e.preventDefault();

  const newUser = {
    firstName,
    surname,
    email,
    password
  };

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    // Check if response is OK
    if (!res.ok) {
      // Attempt to parse JSON from the response
      const errorData = await res.text();
      // Handle non-JSON response
      try {
        const parsedErrorData = JSON.parse(errorData);
        setError(parsedErrorData.msg || 'An error occurred.');
      } catch (jsonError) {
        setError('An error occurred. Please try again later.');
      }
      return;
    }

    // Parse JSON from response if OK
    const data = await res.json();
    navigate('/login'); // Redirect to the login page upon successful signup

  } catch (err) {
    console.error(err.message);
    setError('An error occurred. Please try again later.');
  }
};


  return (
    <div className="container-center">
      <div className="card">
        <div className="form-container">
          <h1 className="title">Create Account</h1>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="label">First name*</label>
              <input
                className="input"
                type="text"
                name="firstName"
                value={firstName}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Surname*</label>
              <input
                className="input"
                type="text"
                name="surname"
                value={surname}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Email*</label>
              <input
                className="input"
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Password*</label>
              <input
                className="input"
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>} {/* Display error message */}
            <button className="button">Create Account</button>
          </form>
          <button className="button button-google">Continue with Google</button>
          <p className="text-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <div className="image-container">
          <img src={witsImage} alt="Signup Illustration" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
