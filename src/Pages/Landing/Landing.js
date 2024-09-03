import React from 'react';
import { Link } from 'react-router-dom'; 
import profilePic from '../../../src/images/wits.png'; 
import '../../globals.css'

function Landing() {
  return (
    <div style={{ 
      backgroundColor: '#002147', 
      height: '100vh', 
      color: 'white', 
      textAlign: 'center', 
      position: 'relative',
    }}>
      {/* Top Navigation Bar */}
      <nav style={{
        // width: '100%', 
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px', 
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0,
        backgroundColor: '#001f3f',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Strategic Events</div>
        <div style={{ display: 'flex', gap: '10px' }}> 
          <Link to="/about" className='navLinkStyle'>About</Link>
          <Link to="/contact" className='navLinkStyle'>Contact Us</Link>
          <Link to="/services" className='navLinkStyle'>Services</Link>
          <Link to="/gallery" className='navLinkStyle'>Gallery</Link>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}> 
          <Link to="/login" className='buttonStyle'>Login</Link>
          <Link to="/signup" className='buttonStyle'>Signup</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100%',
        flexDirection: 'column'
      }}>
        <img src={profilePic} alt="Event Landing" style={{ width: '100%', maxWidth: '500px', marginBottom: '20px' }} />
        <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to Strategic Designs Events</h1>
      </div>
    </div>
  );
}



export default Landing;
