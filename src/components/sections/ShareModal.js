import React, { useEffect, useRef, useState } from "react";
import styles from "./ShareModal.module.css";
import TwitterShareButton from "../shareButtons/TwitterShareButton";
import { useActionContext } from "@/src/contexts/actionsContext";
import { useRouter } from "next/router";
import LinkedInShareButton from "../shareButtons/LinkedinShareButton";
import FacebookShareButton from "../shareButtons/FacebookShareButton";
import WhatsAppShareButton from "../shareButtons/WhatsAppShareButton";

const ShareButtons = ({ quote }) => {
  const { setShareModal, currentQuote, setShowFeedback, setMessage } =
    useActionContext();

  const [quoteUrl, setQuoteUrl] = useState(null);
  const [quoteText, setQuoteText] = useState(null);
  const [closeModal, setCloseModal] = useState(false);
  const background = useRef();
  const buttonBox = useRef();
  const { asPath } = useRouter();

  useEffect(() => {
    console.log(closeModal);
    if (closeModal) {
      setTimeout(() => {
        setShareModal(false);
        setCloseModal(false);
        setShowFeedback(true);
        setMessage("Obrigado por compartilhar! O Quack ama você. 🐣");
      }, 1000);
    }
  }, [closeModal, setShareModal, setMessage, setShowFeedback]);

  // Defines quote URL
  useEffect(() => {
    const url = () => {
      const origin =
        typeof window !== "undefined" && window.location.origin
          ? window.location.origin
          : "";
      const quoteId = quote ? quote.id : currentQuote?.id;
      const url = `${origin}${asPath}quote/${quoteId}`;
      return url;
    };

    setQuoteUrl(url);
  }, [asPath, currentQuote, quote]);

  // Defines the quote text
  useEffect(() => {
    setQuoteText(
      quote
        ? `\"${quote.quote}\"\n${quote.author}`
        : currentQuote
        ? `\"${currentQuote.quote}\"\n${currentQuote.author}\n\n`
        : "",
    );
  }, [currentQuote, quote]);

  // Close modal
  const handleModal = (e) => {
    if (e.target === background.current) {
      setShareModal(false);
    }
  };

  const handleAutomaticCloseModal = (e) => {
    if (e.target !== buttonBox.current) {
      setCloseModal(true);
    }
  };

  return (
    <div
      className={styles.background}
      onClick={(e) => handleModal(e)}
      ref={background}
    >
      <section
        className={styles.content}
        onClick={(e) => handleAutomaticCloseModal(e)}
        ref={buttonBox}
      >
        {/* Share to WhatsApp */}
        <WhatsAppShareButton text={quoteText} url={quoteUrl} />

        {/* Share to Twitter */}
        <TwitterShareButton text={quoteText} url={quoteUrl} />

        {/* Share to Linkedin */}
        <LinkedInShareButton url={quoteUrl} />

        {/* Share to Facebook */}
        <FacebookShareButton url={quoteUrl} />
      </section>
    </div>
  );
};

export default ShareButtons;
