import React from "react";
import styles from "./Footer.module.css";
import { RiGithubFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr />
        <div className={styles.content}>
          <div>
            <p className="body-S">
              <b>Quack Quotes</b>. Construído com 🧡 por{" "}
              <a href="https://quackredacao.com.br/">Quack Redação</a>,{" "}
              <a href="https://sheisacreative.com/">@sheisacreative</a> e{" "}
              <a href="https://github.com/sheisacreative/quack-quotes/graphs/contributors">
                contribuidores
              </a>
              .
            </p>
          </div>
          <div className={styles.github}>
            <p className="body-S">
              <a href="https://github.com/sheisacreative/quack-quotes">
                <RiGithubFill /> Ver no Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
