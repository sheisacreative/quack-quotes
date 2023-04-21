import React from "react";
import styles from "./QuoteText.module.css";

const QuoteText = ({ Quote, size }) => {
  // Biggest quote on the Home Page
  if (size === "big") {
    return (
      <blockquote>
        <p className={`heading-L ${styles.bigQuote}`}>
          <span className={styles.quotationMark}>“</span>
          {Quote.title[0].plain_text}
        </p>
      </blockquote>
    );
  }

  // Other Quotes
  return (
    <blockquote>
      <p className={`heading-M`}>{Quote.title[0].plain_text}</p>
    </blockquote>
  );
};

export default QuoteText;
