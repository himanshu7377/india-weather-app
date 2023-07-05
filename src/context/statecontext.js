import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
  const [selectedState, setSelectedState] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const values = {
    selectedState,
    weatherData,
    setSelectedState,
    setWeatherData,
  };
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
