import React, { createContext, useContext, useState } from "react";

const ActionContext = createContext();

const ActionProvider = ({ children }) => {
  const [showShareModal, setShareModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);

  const copyQuote = (quote) => {
    navigator.clipboard.writeText(
      `"${quote.quote}"\n${quote.author}, ${quote.authorTitle}\n\nVerificado através de Quack Quotes: citacoes.quackredacao.com.br`,
    );
  };

  const triggerAction = (action, quote) => {
    if (action === "Copiar") {
      copyQuote(quote);
    }

    if (action === "Compartilhar") {
      setShareModal(true);
      setCurrentQuote(quote);
    }
  };

  return (
    <ActionContext.Provider
      value={{ triggerAction, showShareModal, setShareModal, currentQuote }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export default ActionProvider;

export const useActionContext = () => {
  return useContext(ActionContext);
};
