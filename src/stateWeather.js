import React from "react";
import { useStateContext } from "./context/statecontext";
import { keyPairs } from "./utils/keyPairs";

const StateWeather = () => {
  const { selectedState, weatherData } = useStateContext();

  return (
    <div>
      <img src={keyPairs[`${selectedState}`]} alt="state map" />
      <h1>{selectedState}</h1>
      <h2>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Weather Condition: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>No weather information available.</p>
      )}
    </div>
  );
};

export default StateWeather;
