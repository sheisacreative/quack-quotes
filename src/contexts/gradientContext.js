import React, { createContext } from "react";

const GradientContext = createContext();

const GradientProvider = ({ children }) => {
  return (
    <GradientContext.Provider value={{}}>{children}</GradientContext.Provider>
  );
};

export default GradientProvider;

export const useGradientContext = () => {
  return useContext(GradientContext);
};
