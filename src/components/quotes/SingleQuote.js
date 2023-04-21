import React from "react";
import styles from "./SingleQuote.module.css";
import ButtonIconContainer from "../button/ButtonIcon/ButtonIconContainer";
import { actionIcons } from "../../data/data";
import { useRouter } from "next/router";
import Author from "./support/Author";
import QuoteText from "./support/QuoteText";
import VerificationText from "./support/VerificationText";

const SingleQuote = ({ quote, quoteId }) => {
  const router = useRouter();

  const navigateToSingleQuote = () => {
    router.push(`/quote/${quoteId}`);
  };

  return (
    <article className={styles.singleQuote} onClick={navigateToSingleQuote}>
      {/* Quote */}
      <div className={styles.quoteContainer}>
        <QuoteText {...quote} />
        <Author className={`body-M`} {...quote} />
        <VerificationText marginTop {...quote} />
      </div>

      {/* Action Buttons */}
      <div className={styles.iconsContainer}>
        <ButtonIconContainer />
      </div>
      <div className={`body-M ${styles.actionsContainer}`}>
        {actionIcons.map((action) => {
          return (
            <React.Fragment key={action.id}>
              {" "}
              <button className={styles.actionButton}>{action.action}</button>
              {action.id != 3 ? <div className={styles.line} /> : ""}
            </React.Fragment>
          );
        })}
      </div>
    </article>
  );
};

export default SingleQuote;
