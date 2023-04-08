import React from "react";
import styles from "./QuackTitle.module.css";

const QuackTitle = () => {
  return (
    <section className={styles.quackTitle}>
      <div className={`container ${styles.titleContainer}`}>
        <h1 className={`heading-M`}>
          <span className={styles.quackQuotes}>Quack Quotes</span>, citações
          verificadas.
        </h1>
        <p className={`body-S ${styles.subtitle}`}>
          Autorias verificadas uma a uma para garantir história e créditos
          sempre respeitados.
        </p>
      </div>
    </section>
  );
};

export default QuackTitle;
