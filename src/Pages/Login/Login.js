import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import '../../globals.css';  // Ensure your styles are applied
import witsImage from '../../images/wits.png';  // Login image

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');  // Error state for failed login attempts
  const { login } = useContext(AuthContext);  // Access login function from AuthContext
  const navigate = useNavigate();  // useNavigate for page navigation

  const { email, password } = formData;

  // Handle input changes
  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send login data to server
      const res = await fetch('http://localhost:5000/api/auth/login', {  // Ensure the correct API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();  // Parse the response

      if (res.ok) {
        // Save token to localStorage, log the user in, and navigate to home
        localStorage.setItem('token', data.token);
        login(data.token);  // Pass token to login function
        navigate('/home');  // Navigate to home page after successful login
      } else {
        setError(data.message);  // Show error message if login fails
      }
    } catch (err) {
      console.error(err.message);
      setError('An error occurred. Please try again later.');  // Catch network or server errors
    }
  };

  return (
    <div className="container-center">
      <div className="card">
        <div className="form-container">
          <h1 className="title">Login</h1>
          <form onSubmit={onSubmit}>
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
            {error && <p className="error-message">{error}</p>}  
            <button className="button">Login</button>
          </form>
          <button className="button button-google">Continue with Google</button>  
          <p className="text-link">
            Don't have an account? <a href="/signup">Create account</a>  
          </p>
        </div>
        <div className="image-container">
          <img src={witsImage} alt="Login Illustration" className="image" />  
        </div>
      </div>
    </div>
  );
};

export default Login;
