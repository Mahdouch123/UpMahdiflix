// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MahdiFlix from './components/MahdiFlix'; // Updated import path
import Login from './components/Login'; // Ensure Login component is imported

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MahdiFlix />} />
        <Route path="/login" element={<Login />} /></Routes>

              
    </Router>
  );
}

export default App;
