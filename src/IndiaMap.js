import React, { useState, useEffect } from "react";
import axios from "axios";
import India from "@svg-maps/india";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "./context/statecontext";

function IndiaMap() {
  const { selectedState, weatherData, setSelectedState, setWeatherData } =
    useStateContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedState) {
      const fetchWeatherData = async () => {
        try {
          const apiKey = "112933bc832707bc64e36ffaee0cf5e8";
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${selectedState}&appid=${apiKey}`
          );
          setWeatherData(response.data);
          console.log("Weather Data:", response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      };
      fetchWeatherData();
    }
  }, [selectedState]);

  // http://maps.openweathermap.org/maps/2.0/weather/TA2/2/2/2?appid='112933bc832707bc64e36ffaee0cf5e8'

  function handleLocationClick(event) {
    const clickedStateCode = event.target.id;
    const clickedStateName = event.target.getAttribute("name");
    setSelectedState(clickedStateName);
    navigate(`/state/${clickedStateCode}`, {
      state: { stateName: clickedStateName },
    });
  }

  return (
    <>
      {/* <h1>{selectedState}</h1>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather Condition: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather information available.</p>
      )} */}
      <div
        style={{
          width: "100vh",
          height: "100vh",
        }}
      >
        <SVGMap map={India} onLocationClick={handleLocationClick} />
      </div>
    </>
  );
}

export default IndiaMap;
