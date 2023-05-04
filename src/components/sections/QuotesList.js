import React from "react";
import SingleQuote from "../quotes/SingleQuote";
import styles from "./QuotesList.module.css";
import { useQuotesContext } from "../../contexts/quotesContext";
import { useNavigationContext } from "@/src/contexts/navigationContext";

const QuotesList = () => {
  const { quotes } = useQuotesContext();

  const { selectedTag } = useNavigationContext();

  return (
    <section className={`container ${styles.quotesList}`}>
      <div className={styles.title}>
        <h2 className="heading-S">
          <b>{quotes && quotes.length} Citações</b>
          {selectedTag && ` sobre ${selectedTag}`}
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
