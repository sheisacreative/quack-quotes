import React, { useRef } from "react";
import styles from "./SingleQuote.module.css";
import ButtonIconContainer from "../button/ButtonIcon/ButtonIconContainer";
import { useRouter } from "next/router";
import Author from "./support/Author";
import QuoteText from "./support/QuoteText";
import VerificationText from "./support/VerificationText";
import ButtonLinkContainer from "../button/ButtonIcon/ButtonLinkContainer";

const SingleQuote = ({ quote, quoteId }) => {
  const actionButtonElement = useRef();
  const actionLinkElement = useRef();
  const router = useRouter();

  const navigateToSingleQuote = (e) => {
    if (
      !actionButtonElement.current.contains(e.target) &&
      !actionLinkElement.current.contains(e.target)
    ) {
      router.push(`/quote/${quoteId}`);
    }
  };

  return (
    <article
      className={styles.singleQuote}
      onClick={(e) => navigateToSingleQuote(e)}
    >
      {/* Quote */}
      <div className={styles.quoteContainer}>
        <QuoteText {...quote} />
        <Author className={`body-M`} {...quote} />
        <VerificationText marginTop {...quote} />
      </div>

      {/* Action Buttons */}
      <div className={styles.iconsContainer} ref={actionButtonElement}>
        <ButtonIconContainer quote={quote} />
      </div>

      {/* Action Buttons Links - Mobile */}
      <div className={styles.linksContainer} ref={actionLinkElement}>
        <ButtonLinkContainer quote={quote} />
      </div>
    </article>
  );
};

export default SingleQuote;
