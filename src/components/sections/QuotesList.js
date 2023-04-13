import React from "react";
import SingleQuote from "../quotes/SingleQuote";
import styles from "./QuotesList.module.css";

const QuotesList = ({ quotes }) => {
  return (
    <section className={`container ${styles.quotesList}`}>
      <div className={styles.title}>
        <h2 className="heading-S">
          <b>{quotes.length} Citações</b> verificadas
        </h2>
        <hr className={styles.titleLine} />
      </div>
      <div className={styles.quotesContainer}>
        {quotes.map((quote) => {
          console.log(quote);

          return <SingleQuote key={quote.id} {...quote.properties} />;
        })}
      </div>
    </section>
  );
};

export default QuotesList;
