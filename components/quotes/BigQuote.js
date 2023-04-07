import React from "react";
import ButtonIconContainer from "../button/ButtonIconContainer";
import styles from "./BigQuote.module.css";
import Link from "next/link";

const BigQuote = () => {
  return (
    <article className={styles.bigQuote}>
      <div className={styles.quoteContainer}>
        <h1 className={`heading-L ${styles.headingL}`}>
          <span className={styles.quotationMark}>“</span>A mais tola das
          virtudes é a idade. Que significa ter quinze, dezessete, dezoito ou
          vinte anos? Há pulhas, há imbecis, há santos, há gênios de todas as
          idades.
        </h1>
        <p className={`heading-S ${styles.author}`}>
          <Link href="/">Nelson Rodrigues</Link>| Escritor e poeta brasileiro
        </p>
      </div>
      <hr className={styles.line} />
      <p className={`body-S ${styles.verification} `}>
        Escrito em: “Flor de Obsessão: as 1000 melhores frases de Nelson
        Rodrigues”. Verificado através de{" "}
        <a href="https://pt.m.wikiquote.org/wiki/Idade">Wikipedia</a>.
      </p>
      <div className={styles.iconsContainer}>
        <ButtonIconContainer />
      </div>
    </article>
  );
};

export default BigQuote;
