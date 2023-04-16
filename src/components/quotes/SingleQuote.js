import React from "react";
import styles from "./SingleQuote.module.css";
import Link from "next/link";
import ButtonIconContainer from "../button/ButtonIconContainer";
import { actionIcons } from "../../data/data";
import { useQuotesContext } from "@/src/contexts/quotesContext";
import { useRouter } from "next/router";
import { firstLower } from "@/src/utils/supportFunctions";
import { joinSentence } from "@/src/pages/api/notionApi";

const SingleQuote = ({
  quoteId,
  Author,
  AuthorTitle,
  Quote,
  Source,
  VerificationSource,
  VerificationLink,
}) => {
  const router = useRouter();
  const source = joinSentence(Source.rich_text);

  const navigateToSingleQuote = () => {
    router.push(`/quotes/${quoteId}`);
  };

  return (
    <article className={styles.singleQuote} onClick={navigateToSingleQuote}>
      <div className={styles.quoteContainer}>
        <blockquote>
          <p className={`heading-M`}>{Quote.title[0].plain_text}</p>
        </blockquote>

        <p className={`body-M ${styles.author}`}>
          <cite>
            {joinSentence(Author.rich_text)},{" "}
            {firstLower(joinSentence(AuthorTitle.rich_text))}
          </cite>
        </p>
        <p className={`body-S ${styles.verification} `}>
          {source} Verificado através de{" "}
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
