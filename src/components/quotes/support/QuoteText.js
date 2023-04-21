import React from "react";
import styles from "./QuoteText.module.css";

const QuoteText = ({ quote, size }) => {
  // Biggest quote on the Home Page
  if (size === "big") {
    return (
      <blockquote>
        <p className={`heading-L ${styles.bigQuote}`}>
          <span className={styles.quotationMark}>“</span>
          {quote}
        </p>
      </blockquote>
    );
  }

  // Other Quotes
  return (
    <blockquote>
      <p className={`heading-M`}>{quote}</p>
    </blockquote>
  );
};

export default QuoteText;
