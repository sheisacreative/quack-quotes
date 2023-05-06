import React, { createContext, useContext } from "react";

const ActionContext = createContext();

const ActionProvider = ({ children }) => {
  const copyQuote = (quote) => {
    navigator.clipboard.writeText(
      `"${quote.quote}"\n${quote.author}, ${quote.authorTitle}\n\nVerificado através de Quack Quotes: citacoes.quackredacao.com.br`,
    );
  };

  const triggerAction = (action, quote) => {
    if (action === "Copiar") {
      copyQuote(quote);
    }
  };

  return (
    <ActionContext.Provider value={{ triggerAction }}>
      {children}
    </ActionContext.Provider>
  );
};

export default ActionProvider;

export const useActionContext = () => {
  return useContext(ActionContext);
};
