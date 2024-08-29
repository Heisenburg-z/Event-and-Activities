import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
