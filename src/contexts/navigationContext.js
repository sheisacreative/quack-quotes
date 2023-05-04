import React, { createContext, useContext, useEffect, useState } from "react";
import { useQuotesContext } from "./quotesContext";
import { defineTagsArray } from "../utils/supportFunctions";
import { useRouter } from "next/router";
import { tags } from "../data/data";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [selectedTag, setSeletecTag] = useState("");

  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    if (pathname === "/") {
      setSeletecTag("");
      localStorage.removeItem("category");
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider
      value={{
        tags,
        selectedTag,
        setSeletecTag,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};
