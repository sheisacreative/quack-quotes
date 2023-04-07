import React from "react";
import SingleQuote from "../quotes/SingleQuote";
import styles from "./QuotesList.module.css";

const QuotesList = () => {
  return (
    <section className={`container ${styles.quotesList}`}>
      <h2 className="heading-S gray-60">
        <b>123 Citações</b> verificadas
      </h2>
      <div className={styles.quotesContainer}>
        <SingleQuote />
        <SingleQuote />
        <SingleQuote />
        <SingleQuote />
      </div>
    </section>
  );
};

export default QuotesList;
