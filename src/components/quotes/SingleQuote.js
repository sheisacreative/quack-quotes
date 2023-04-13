import React from "react";
import styles from "./SingleQuote.module.css";
import Link from "next/link";
import ButtonIconContainer from "../button/ButtonIconContainer";
import { actionIcons } from "../../data/data";

const SingleQuote = ({
  Author,
  Quote,
  Source,
  VerificationSource,
  VerificationLink,
}) => {
  const joinSentence = (myArray) => {
    let sentence = "";

    myArray.map((item) => {
      sentence = `${sentence}${item.plain_text}`;
    });

    return sentence;
  };

  const source = joinSentence(Source.rich_text);

  return (
    <article className={styles.singleQuote}>
      <div className={styles.quoteContainer}>
        <blockquote>
          <p className={`heading-M`}>{Quote.title[0].plain_text}</p>
        </blockquote>

        <p className={`body-M ${styles.author}`}>
          <cite>{Author.rich_text[0].plain_text}</cite>
        </p>
        <p className={`body-S ${styles.verification} `}>
          {source}. Verificado através de{" "}
          <a href={VerificationLink.url} target="blank">
            {VerificationSource.rich_text[0].plain_text}
          </a>
          .
        </p>
      </div>
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
