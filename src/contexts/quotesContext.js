import React, { createContext, useContext, useEffect, useState } from "react";
import { clearMultipleQuotes } from "../pages/api/notionApi";

const QuotesContext = createContext();

const QuotesProvider = ({ children, originalQuotes }) => {
  const [quotes, setQuotes] = useState(null);
  const [randomQuote, setRandomQuote] = useState(null);
  const [tags, setTags] = useState(null);

  // Returns an array with tags
  const defineTagsArray = (quotes) => {
    const allTags = quotes.reduce((acc, currentQuote) => {
      currentQuote.tags.forEach((tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
      });
      return acc;
    }, []);

    return allTags;
  };

  // Returns a number between 0 and quotes.length - 1
  const raffleRandomIndex = (number) => {
    const randomIndex = Math.floor(Math.random() * number);
    return randomIndex;
  };

  // Clear quotes from the API
  useEffect(() => {
    setQuotes(clearMultipleQuotes(originalQuotes));
  }, [originalQuotes]);

  useEffect(() => {
    if (quotes) {
      // Raffle a random quote
      const index = raffleRandomIndex(quotes.length);
      setRandomQuote(quotes[index]);

      // Define tags Array
      setTags(defineTagsArray(quotes));
    }
  }, [quotes]);

  return (
    <QuotesContext.Provider value={{ quotes, randomQuote, tags }}>
      {children}
    </QuotesContext.Provider>
  );
};

export default QuotesProvider;

export const useQuotesContext = () => {
  return useContext(QuotesContext);
};
