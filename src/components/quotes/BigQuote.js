import React from "react";
import ButtonIconContainer from "../button/ButtonIcon/ButtonIconContainer";
import styles from "./BigQuote.module.css";
import { useQuotesContext } from "../../contexts/quotesContext";
import Author from "./support/Author";
import QuoteText from "./support/QuoteText";
import VerificationText from "./support/VerificationText";

const BigQuote = () => {
  const { randomQuote } = useQuotesContext();

  if (!randomQuote) {
    return (
      <article className={styles.bigQuote}>
        <p className="body-M">No quote was found :(</p>
      </article>
    );
  }

  return (
    <article className={styles.bigQuote}>
      <div className={styles.quoteContainer}>
        <QuoteText size="big" {...randomQuote} />
        <Author className="body-L" {...randomQuote} />
        <VerificationText marginTop {...randomQuote} />
      </div>
      <div className={styles.iconsContainer}>
        <ButtonIconContainer quote={randomQuote} />
      </div>
    </article>
  );
};

export default BigQuote;
