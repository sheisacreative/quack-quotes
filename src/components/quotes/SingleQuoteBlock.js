import React from "react";
import styles from "./SingleQuoteBlock.module.css";
import Author from "./support/Author";
import QuoteText from "./support/QuoteText";
import VerificationText from "./support/VerificationText";
import { RiEyeLine, RiHeart3Line } from "react-icons/ri";
import { useGradientContext } from "@/src/contexts/gradientContext";

const SingleQuoteBlock = ({ quote }) => {
  const { gradient } = useGradientContext();

  return (
    <article
      className={styles.quoteContainerBG}
      style={{
        background: gradient,
      }}
    >
      <div className={styles.quoteContainer}>
        <div className={styles.quote}>
          <Author {...quote} image={true} />
          <QuoteText {...quote} />
          <VerificationText {...quote} />
        </div>
        <hr />
        <div className={`body-L ${styles.engagement}`}>
          <p>
            <RiEyeLine />
            13.4k
          </p>
          <p>
            <RiHeart3Line />
            4.2k
          </p>
        </div>
      </div>
      <p className={`${styles.quackQuotesLink} body-S neutral-0`}>
        quackquotes.com.br
      </p>
    </article>
  );
};

export default SingleQuoteBlock;
