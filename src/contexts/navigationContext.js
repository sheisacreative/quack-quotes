import React, { createContext, useContext, useEffect, useState } from "react";
import { clearMultipleQuotes } from "../pages/api/notionApi";

const NavigationContext = createContext();

const NavigationProvider = ({ children, originalQuotes }) => {
  const [quotes, setQuotes] = useState(null);
  const [tags, setTags] = useState(null);
  const [selectedTag, setSeletecTag] = useState("");

  // Clear quotes
  useEffect(() => {
    if (originalQuotes) {
      setQuotes(clearMultipleQuotes(originalQuotes));
    }
  }, [originalQuotes]);

  // Slug from text
  const diacritic = require("diacritic");

  const turnToSlug = (str) => {
    str = diacritic.clean(str.toLowerCase().trim()); // remover acentos e converter para minúsculas
    str = str.replace(/[^\w\s-]/g, ""); // remover caracteres especiais
    str = str.replace(/[\s_]+/g, "-"); // substituir espaços e underscores por traços
    return str;
  };

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
    <NavigationContext.Provider
      value={{ tags, turnToSlug, selectedTag, setSeletecTag }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
