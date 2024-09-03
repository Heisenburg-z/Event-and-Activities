// // App.js
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './Context/authContext';
// import Login from './Pages/Login/Login';
// import Signup from './Pages/Signup/Signup';
// import NoPage from './Pages/NoPage/NoPage';
// import Dashboard from './Pages/Dashboard/Dashboard';
// import Landing from './Pages/Landing/Landing';
// import Home from './Pages/Home/Home';
// import EventDetails from './components/EventDetails';
// import Calendar from './Pages/Calendar/calendar';
// import ProtectedRoute from './components/protectedRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <AuthProvider>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
//           <Route path="/event/:id" element={<ProtectedRoute element={<EventDetails />} />} />
//           <Route path="/calendar" element={<ProtectedRoute element={<Calendar />} />} />
//           <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
//           <Route path="*" element={<NoPage />} />
//         </Routes>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import NoPage from './Pages/NoPage/NoPage';
import Dashboard from './Pages/Dashboard/Dashboard';
import Landing from './Pages/Landing/Landing';
import Home from './Pages/Home/Home';
import EventDetails from './components/EventDetails';
import Calendar from './Pages/Calendar/calendar';
import ProtectedRoute from './components/protectedRoute';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/event/:id"
            element={
              <ProtectedRoute>
                <EventDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <ProtectedRoute>
                <Calendar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
