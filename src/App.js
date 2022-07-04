import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Page
import PreLogin from './pages/PreLogin/PreLogin'
// Components
import Dashboard from './components/Dashboard';
import Home from './components/Home';
// Css
import './App.css';

function App() {

  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/signup" element={<PreLogin />}></Route>
      <Route path="/signin" element={<PreLogin />}></Route>
      <Route path="/viewstudent" element={<Dashboard />}></Route>
      <Route path="/addstudent" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
