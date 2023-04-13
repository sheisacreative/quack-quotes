import React from "react";
import SingleQuote from "../quotes/SingleQuote";
import styles from "./QuotesList.module.css";

const QuotesList = ({ results }) => {
  console.log(results);
  return (
    <section className={`container ${styles.quotesList}`}>
      <div className={styles.title}>
        <h2 className="heading-S">
          <b>123 Citações</b> verificadas
        </h2>
        <hr className={styles.titleLine} />
      </div>
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
