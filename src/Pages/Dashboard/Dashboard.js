import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import EventCalendar from '../../components/EventCalendar';
import UserProfile from '../../components/UserProfile';
import EventDetails from '../../components/EventDetails';
import EditProfile from '../../components/EditProfile';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const ContentArea = styled.div`
  flex-grow: 1;
  padding: 2rem;
  overflow-y: auto;
  background-color: #f5f5f5;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <ContentArea>
        <Routes>
          <Route path="/" element={<EventCalendar />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/events/:id" element={<EventDetails />} />
         
        </Routes>
      </ContentArea>
    </DashboardContainer>
  );
};

export default Dashboard;

 