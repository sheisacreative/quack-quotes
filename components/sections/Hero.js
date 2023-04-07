import React from "react";
import BigQuote from "../quotes/BigQuote";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <BigQuote />
    </section>
  );
};

export default Hero;
