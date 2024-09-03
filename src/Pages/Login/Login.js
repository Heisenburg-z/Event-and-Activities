
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import '../../globals.css';
import witsImage from '../../images/wits.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext); 
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        
        localStorage.setItem('token', data.token);
        login(data.token); 
        navigate('/home'); 
      } else {
        setError(data.msg); 
      }
    } catch (err) {
      console.error(err.message);
      setError('An error occurred. Please try again later.'); 
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
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
            <button className="button">Login</button>
          </form>
          <button className="button button-google">Continue with Google</button>
          <p className="text-link">
            Don't have an account? <a href="/signup">Sign up</a>
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
