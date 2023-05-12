import React, { useEffect, useRef, useState } from "react";
import styles from "./ShareModal.module.css";
import TwitterShareButton from "../shareButtons/TwitterShareButton";
import { useActionContext } from "@/src/contexts/actionsContext";
import { useRouter } from "next/router";
import LinkedInShareButton from "../shareButtons/LinkedinShareButton";
import FacebookShareButton from "../shareButtons/FacebookShareButton";
import WhatsAppShareButton from "../shareButtons/WhatsAppShareButton";

const ShareButtons = ({ quote }) => {
  const { setShareModal, currentQuote } = useActionContext();
  const [quoteUrl, setQuoteUrl] = useState(null);
  const [quoteText, setQuoteText] = useState(null);
  const background = useRef();
  const { asPath } = useRouter();
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

  useEffect(() => {
    setQuoteText(
      quote
        ? `\"${quote.quote}\"\n${quote.author}`
        : currentQuote
        ? `\"${currentQuote.quote}\"\n${currentQuote.author}`
        : "",
    );
  }, [currentQuote, quote]);

  // Close modal
  const handleModal = (e) => {
    if (e.target === background.current) {
      setShareModal(false);
    }
  };

  return (
    <div
      className={styles.background}
      onClick={(e) => handleModal(e)}
      ref={background}
    >
      <section className={styles.content}>
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
