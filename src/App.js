import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
// Page
import PreLogin from './pages/PreLogin/PreLogin'
// Component
import Dashboard from './components/Dashboard';
// Css
import './App.css';


function App() {

  return (
    <Routes>
      <Route path="/signup" element={<PreLogin />}></Route>
      <Route path="/signin" element={<PreLogin />}></Route>
      <Route path="/viewstudent" element={<Dashboard />}></Route>
      <Route path="/addstudent" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
