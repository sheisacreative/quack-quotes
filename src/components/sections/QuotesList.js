import React from "react";
import SingleQuote from "../quotes/SingleQuote";
import styles from "./QuotesList.module.css";
import { useQuotesContext } from "../../contexts/quotesContext";

const QuotesList = () => {
  const { quotes } = useQuotesContext();

  return (
    <section className={`container ${styles.quotesList}`}>
      <div className={styles.title}>
        <h2 className="heading-S">
          <b>{quotes && quotes.length} Citações</b> verificadas
        </h2>
        <hr className={styles.titleLine} />
      </div>
      <div className={styles.quotesContainer}>
        {quotes &&
          quotes.map((quote) => {
            return (
              <SingleQuote key={quote.id} quoteId={quote.id} quote={quote} />
            );
          })}
      </div>
    </section>
  );
};

export default QuotesList;
