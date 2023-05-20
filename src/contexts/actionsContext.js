import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { toJpeg } from "html-to-image";

const ActionContext = createContext();

const ActionProvider = ({ children }) => {
  const [showShareModal, setShareModal] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [message, setMessage] = useState("");
  const quoteImage = useRef();

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

  // Copy quote
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

  // Download image
  const downloadImage = async () => {
    try {
      if (quoteImage.current) {
        const dataUrl = await toJpeg(quoteImage.current, {
          quality: 0.95,
          style: { borderRadius: 0 },
          // canvasWidth: 800,
          // canvasHeight: 800,
        });

        // download image
        const link = document.createElement("a");
        link.download = "quack-quotes.jpg";
        link.href = dataUrl;
        link.click();
      }
    } catch (e) {
      setShowFeedback(true);
      setMessage("Ops! Erro ao baixar imagem. :(");
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

    if (action === "Baixar imagem") {
      downloadImage();
      console.log("baixar");
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
        quoteImage,
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
