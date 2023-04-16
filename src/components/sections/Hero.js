import React from "react";
import BigQuote from "../quotes/BigQuote";
import styles from "./Hero.module.css";
import { useQuotesContext } from "../../contexts/quotesContext";

const Hero = () => {
  return (
    <section className={`container ${styles.hero}`}>
      <BigQuote />
    </section>
  );
};

export default Hero;
