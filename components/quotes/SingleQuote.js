import React from "react";
import styles from "./SingleQuote.module.css";
import Link from "next/link";
import ButtonIconContainer from "../button/ButtonIconContainer";
import { actionIcons } from "../../data/data";

const SingleQuote = () => {
  return (
    <Link href={`${/quotes/d}`} className={styles.link}>
      <article className={styles.singleQuote}>
        <div className={styles.quoteContainer}>
          <blockquote>
            <p className={`heading-M`}>
              A mais tola das virtudes é a idade. Que significa ter quinze,
              dezessete, dezoito ou vinte anos? Há pulhas, há imbecis, há
              santos, há gênios de todas as idades.
            </p>
          </blockquote>
          <p className={`body-M ${styles.author}`}>
            <cite>
              <Link href="/">Nelson Rodrigues</Link>, escritor e poeta
              brasileiro.
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
    </Link>
  );
};

export default SingleQuote;
