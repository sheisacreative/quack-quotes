import React, { createContext, useContext, useState } from "react";

const GradientContext = createContext();

const GradientProvider = ({ children }) => {
  const [gradient, setGradient] = useState(
    "linear-gradient(180deg, #FF7A00 0%, #DBB800 100%)",
  );

  return (
    <GradientContext.Provider value={{ gradient, setGradient }}>
      {children}
    </GradientContext.Provider>
  );
};

export default GradientProvider;

export const useGradientContext = () => {
  return useContext(GradientContext);
};
