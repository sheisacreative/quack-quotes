import React, { createContext, useContext, useEffect, useState } from "react";
import { clearMultipleQuotes } from "../pages/api/notionApi";

const QuotesContext = createContext();

const QuotesProvider = ({ children, originalQuotes }) => {
  const [quotes, setQuotes] = useState(null);

  const [randomQuote, setRandomQuote] = useState(null);

  // Returns a number between 0 and quotes.length - 1
  const raffleRandomIndex = (number) => {
    const randomIndex = Math.floor(Math.random() * number);
    return randomIndex;
  };

  // Clear quotes from the API
  useEffect(() => {
    const clearedQuotes = clearMultipleQuotes(originalQuotes);
    setQuotes(clearedQuotes);
  }, [originalQuotes]);

  // Raffle a random quote
  useEffect(() => {
    if (quotes) {
      const index = raffleRandomIndex(quotes.length);
      setRandomQuote(quotes[index]);
    }
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
