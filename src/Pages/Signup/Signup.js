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

  const { firstName, surname, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();

    const newUser = {
      firstName,
      surname,
      email,
      password
    };

    // Use environment variable for API URL
    const API_URL = process.env.REACT_APP_API_URL;

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      if (!res.ok) {
        const errorData = await res.text(); // Get response as text in case it's not JSON
        try {
          const parsedErrorData = JSON.parse(errorData); // Try parsing as JSON
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
