import React, { useState } from "react";

export const GlobalContext = React.createContext();

import { en } from "../translate/en";

export const GlobalProvider = (props) => {
  const [theme, setTheme] = useState(false);
  const [language, setLanguage] = useState(en);

  return (
    <GlobalContext.Provider
      value={{ theme: theme, language: language, setLanguage, setTheme }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
