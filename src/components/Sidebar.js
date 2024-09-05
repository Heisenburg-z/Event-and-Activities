
import profilePic from '../../src/images/wits.jpg'; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaTicketAlt, FaBell } from 'react-icons/fa';


function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('token'); 
    sessionStorage.clear(); 
    navigate('/landing'); 
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src={profilePic} alt="Profile" className="profile-image" />
        <h3 className="profile-name">Clement</h3>
      </div>
      <nav>
        <NavLink to="/home" className="nav-link">
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/create-event" className="nav-link">
          <FaCalendarAlt />
          <span>Create Event</span>
        </NavLink>
        <NavLink to="/my-events" className="nav-link">
          <FaCalendarAlt />
          <span>My Events</span>
        </NavLink>
        <NavLink to="/calendar" className="nav-link">
          <FaCalendarAlt />
          <span>Calendar</span>
        </NavLink>
        <NavLink to="/tickets" className="nav-link">
          <FaTicketAlt />
          <span>Tickets</span>
        </NavLink>
        <NavLink to="/notifications" className="nav-link">
          <FaBell />
          <span>Notifications</span>
        </NavLink>
      </nav>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );

}

export default Sidebar;
