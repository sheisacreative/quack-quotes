import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <hr />
        <div className={styles.content}>
          <div>
            <p className="body-S">
              Criado por{" "}
              <a href="https://sheisacreative.com/">
                @sheisacreative, making the web cool again
              </a>
              .
            </p>
            <p className="body-S">
              Uma extensão do programa voluntário{" "}
              <a href="https://quackredacao.com.br/">Quack Redação</a>.
            </p>
          </div>
          <div>
            <p className="body-S">
              <a href="https://github.com/sheisacreative/quack-quotes">
                Ver no Github
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
