import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './Dashboard';
import Sidebar from '../../components/Sidebar';
import EventCalendar from '../../components/EventCalendar';
import UserProfile from '../../components/UserProfile';
import EditProfile from '../../components/EditProfile';
import EventDetails from '../../components/EventDetails';

// Mock the child components that the Dashboard depends on
jest.mock('../../components/Sidebar', () => () => <div>Sidebar Component</div>);
jest.mock('../../components/EventCalendar', () => () => <div>EventCalendar Component</div>);
jest.mock('../../components/UserProfile', () => () => <div>UserProfile Component</div>);
jest.mock('../../components/EditProfile', () => () => <div>EditProfile Component</div>);
jest.mock('../../components/EventDetails', () => () => <div>EventDetails Component</div>);

describe('Dashboard Component', () => {
  test('renders Sidebar and EventCalendar by default', () => {
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    // Check that the Sidebar is rendered
    expect(screen.getByText('Sidebar Component')).toBeInTheDocument();
    
    // Check that EventCalendar is rendered by default
    expect(screen.getByText('EventCalendar Component')).toBeInTheDocument();
  });

  test('renders UserProfile when navigating to /profile', () => {
    window.history.pushState({}, 'Profile Page', '/profile');
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    // Check that the UserProfile component is rendered
    expect(screen.getByText('UserProfile Component')).toBeInTheDocument();
  });

  test('renders EditProfile when navigating to /profile/edit', () => {
    window.history.pushState({}, 'Edit Profile Page', '/profile/edit');
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    // Check that the EditProfile component is rendered
    expect(screen.getByText('EditProfile Component')).toBeInTheDocument();
  });

  test('renders EventDetails when navigating to /events/:id', () => {
    window.history.pushState({}, 'Event Details Page', '/events/1');
    render(
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    );

    // Check that the EventDetails component is rendered
    expect(screen.getByText('EventDetails Component')).toBeInTheDocument();
  });
});
