import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuotesContext } from "./quotesContext";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const { quotes } = useQuotesContext();
  const [tags, setTags] = useState(null);

  // Returns an arridy with tags
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

  useEffect(() => {
    if (quotes) {
      // Define tags Array
      setTags(defineTagsArray(quotes));
    }
  }, [quotes]);

  return (
    <NavigationContext.Provider value={{ tags }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
