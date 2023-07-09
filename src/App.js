import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import StateWeather from './stateWeather';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={loggedIn ? <Home /> : <Navigate to="/login" />} />
        <Route path="/state/:stateName" element={<StateWeather />} /> 
      </Routes>
    </Router>
  );
};

export default App;
