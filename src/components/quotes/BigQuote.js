import React from "react";
import ButtonIconContainer from "../button/ButtonIconContainer";
import styles from "./BigQuote.module.css";
import Link from "next/link";
import { useQuotesContext } from "../../contexts/quotesContext";
import { firstLower } from "@/src/utils/supportFunctions";
import { joinSentence } from "@/src/pages/api/notionApi";

const BigQuote = () => {
  const { randomQuote } = useQuotesContext();

  if (!randomQuote) {
    return (
      <article className={styles.bigQuote}>
        <div className={styles.quoteContainer}>
          <blockquote cite="https://pt.m.wikiquote.org/wiki/Idade">
            <p className={`heading-L ${styles.headingL}`}>
              <span className={styles.quotationMark}>“</span>A mais tola das
              virtudes é a idade. Que significa ter quinze, dezessete, dezoito
              ou vinte anos? Há pulhas, há imbecis, há santos, há gênios de
              todas as idades.
            </p>
          </blockquote>
          <p className={`body-L`}>
            <cite>
              <Link href="/">Nelson Rodrigues</Link>, escritor e poeta
              brasileiro
            </cite>
          </p>
          <p className={`body-S ${styles.verification} `}>
            Escrito em: “Flor de Obsessão: as 1000 melhores frases de Nelson
            Rodrigues”. Verificado através de{" "}
            <a href="https://pt.m.wikiquote.org/wiki/Idade">Wikipedia</a>.
          </p>
        </div>
        <div className={styles.iconsContainer}>
          <ButtonIconContainer />
        </div>
      </article>
    );
  }

  const {
    Author,
    AuthorTitle,
    Quote,
    Source,
    VerificationLink,
    VerificationSource,
  } = randomQuote;

  return (
    <article className={styles.bigQuote}>
      <div className={styles.quoteContainer}>
        <blockquote cite="https://pt.m.wikiquote.org/wiki/Idade">
          <p className={`heading-L ${styles.headingL}`}>
            <span className={styles.quotationMark}>“</span>
            {Quote.title[0].plain_text}
          </p>
        </blockquote>
        <p className={`body-L`}>
          <cite>
            {joinSentence(Author.rich_text)},{" "}
            {firstLower(joinSentence(AuthorTitle.rich_text))}
          </cite>
        </p>
        <p className={`body-S ${styles.verification} `}>
          {joinSentence(Source.rich_text)} Verificado através de{" "}
          <a href={VerificationLink.url} target="blank">
            {joinSentence(VerificationSource.rich_text)}
          </a>
          .
        </p>
      </div>
      <div className={styles.iconsContainer}>
        <ButtonIconContainer />
      </div>
    </article>
  );
};

export default BigQuote;
