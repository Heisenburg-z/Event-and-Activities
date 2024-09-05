import React, { useState } from 'react';
import '../../globals.css';  
import witsImage from '../../images/wits.png';  

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(null);  

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

 
    const newUser = {
      name: formState.name,
      surname: formState.surname,
      email: formState.email,
      password: formState.password
    };

    console.log("New User Data: ", newUser);  

    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      // Check if response is not ok
      if (!res.ok) {
        const errorData = await res.json();
        console.log("Error Response: ", errorData);
        setErrorMessage(errorData.message || 'Signup failed');  
      } else {
        const data = await res.json();
        console.log("Success: ", data);
        
        window.location.href = '/login';
      }
    } catch (error) {
      console.error("Error during signup: ", error);
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="container-center">  
      <div className="card">
        <div className="form-container">
          <h1 className="title">Sign Up</h1>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label className="label">Name*</label>
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Surname*</label>
              <input
                className="input"
                type="text"
                name="surname"
                placeholder="Surname"
                value={formState.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Email*</label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="label">Password*</label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Password"
                value={formState.password}
                onChange={handleChange}
                required
              />
            </div>
            <button className="button" type="submit">Sign Up</button>
          </form>
          <p className="text-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
        <div className="image-container">
          <img src={witsImage} alt="Login Illustration" className="image" />  
        </div>
      </div>
    </div>
  );
};

export default Signup;
