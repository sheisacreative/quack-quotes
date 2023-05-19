import React, { createContext, useContext, useEffect, useState } from "react";

const ActionContext = createContext();

const ActionProvider = ({ children }) => {
  const [showShareModal, setShareModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [message, setMessage] = useState("");

  // Reset the feedback
  useEffect(() => {
    if (showFeedback) {
      setTimeout(() => {
        setShowFeedback(false);
      }, 2000);
    }
  }, [showFeedback, setShowFeedback]);

  // Reset message
  useEffect(() => {
    if (!showFeedback) {
      setTimeout(() => {
        setMessage("");
      }, 1000);
    }
  }, [showFeedback]);

  const copyQuote = (quote) => {
    try {
      navigator.clipboard.writeText(
        `"${quote.quote}"\n${quote.author}, ${quote.authorTitle}\n\nVerificado através de Quack Quotes: citacoes.quackredacao.com.br`,
      );
      setMessage("Citação copiada com sucesso! 🐣💛");
    } catch (e) {
      setMessage("Oops! Deu algum ruim aqui. Não copiou. :(");
      console.log(e);
    }
  };

  const triggerAction = (action, quote) => {
    if (action === "Copiar") {
      copyQuote(quote);
      setShowFeedback(true);
    }

    if (action === "Compartilhar") {
      setShareModal(true);
      setCurrentQuote(quote);
    }
  };

  return (
    <ActionContext.Provider
      value={{
        triggerAction,
        showShareModal,
        setShareModal,
        currentQuote,
        showFeedback,
        setShowFeedback,
        message,
        setMessage,
      }}
    >
      {children}
    </ActionContext.Provider>
  );
};

export default ActionProvider;

export const useActionContext = () => {
  return useContext(ActionContext);
};
