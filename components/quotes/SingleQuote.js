import React from "react";
import styles from "./SingleQuote.module.css";
import Link from "next/link";
import ButtonIconContainer from "../button/ButtonIconContainer";
import { actionIcons } from "../../data/data";

const SingleQuote = () => {
  return (
    <article className={styles.singleQuote}>
      <div className={styles.quoteContainer}>
        <h3 className={`heading-M`}>
          A mais tola das virtudes é a idade. Que significa ter quinze,
          dezessete, dezoito ou vinte anos? Há pulhas, há imbecis, há santos, há
          gênios de todas as idades.
        </h3>
        <p className={`body-M ${styles.author}`}>
          <Link href="/">Nelson Rodrigues</Link>| Escritor e poeta brasileiro
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
      <div className={styles.actionsContainer}>
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
