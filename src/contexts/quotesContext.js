import React, { createContext, useContext, useEffect, useState } from "react";

const QuotesContext = createContext();

const QuotesProvider = ({ children, quotes }) => {
  const [randomQuote, setRandomQuote] = useState(null);

  useEffect(() => {
    const raffleRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      // Returns a number between 0 and quotes.length - 1

      setRandomQuote({ ...quotes[randomIndex].properties });
    };

    raffleRandomQuote();
  }, [quotes]);

  return (
    <QuotesContext.Provider value={{ quotes, randomQuote }}>
      {children}
    </QuotesContext.Provider>
  );
};

export default QuotesProvider;

export const useQuotesContext = () => {
  return useContext(QuotesContext);
};
