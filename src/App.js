import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndiaMap from "./IndiaMap";
import Map from "./Map";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndiaMap />} />
        <Route path="/state/:stateName" element={<IndiaMap />} />
      </Routes>
    </Router>
  );
}

export default App;






