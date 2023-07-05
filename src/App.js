import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import IndiaMap from "./IndiaMap";
import Map from "./Map";
import { useStateContext } from "./context/statecontext";
import axios from "axios";
import StateWeather from "./stateWeather";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndiaMap />} />
        <Route path="/state/:stateName" element={<StateWeather />} />
      </Routes>
    </Router>
  );
}

export default App;
