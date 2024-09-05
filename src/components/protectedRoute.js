import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { RingLoader } from 'react-spinners'; 
import { AuthContext } from '../Context/authContext'; 
import '../globals.css'; 

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (auth === null) {
   
    return (
      <div className="spinner-container">
        <RingLoader color="#f0ad4e" size={60} />
      </div>
    );
  }

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
