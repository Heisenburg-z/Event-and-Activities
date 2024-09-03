import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import EventCalendar from '../../components/EventCalendar';
import UserProfile from '../../components/UserProfile';
import EventDetails from '../../components/EventDetails';
import EditProfile from '../../components/EditProfile';
import "../../globals.css"


const Dashboard = () => {
  return (
    <div classname="DashboardContainer">
      <Sidebar />
      <div classname="ContentArea">
        <Routes>
          <Route path="/" element={<EventCalendar />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/events/:id" element={<EventDetails />} />
         
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

 