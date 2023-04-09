import Head from "next/head";
import React from "react";
import styles from "./[id].module.css";
import Link from "next/link";
import ButtonIconContainer from "@/components/button/ButtonIconContainer";
import { actionIcons } from "../../data/data";
import {
  RiArrowDropLeftLine,
  RiArrowLeftLine,
  RiEyeLine,
  RiHeart3Line,
} from "react-icons/ri";
import Image from "next/image";

const SingleQuotePage = () => {
  return (
    <>
      <Head>
        <title>Nomine da citação</title>
      </Head>
      <div className={styles.background}>
        <section className={styles.content}>
          <Link href="/" className={`body-M neutral-20 ${styles.backLink}`}>
            <RiArrowLeftLine />
            Voltar para citações
          </Link>
          <article
            className={styles.quoteContainerBG}
            style={{
              background: "linear-gradient(180deg, #FF7A00 0%, #DBB800 100%)",
            }}
          >
            <div className={styles.quoteContainer}>
              <div className={`${styles.author}`}>
                <Image src="" alt="" />
                <p className="body-M">
                  <cite>
                    <Link href="/">Nelson Rodrigues</Link>
                  </cite>
                </p>
                <p className="body-S">escritor e poeta brasileiro</p>
              </div>
              <blockquote>
                <p className={`heading-M`}>
                  A mais tola das virtudes é a idade. Que significa ter quinze,
                  dezessete, dezoito ou vinte anos? Há pulhas, há imbecis, há
                  santos, há gênios de todas as idades.
                </p>
              </blockquote>
              <p className={`body-S ${styles.verification} `}>
                Escrito em: “Flor de Obsessão: as 1000 melhores frases de Nelson
                Rodrigues”. Verificado:{" "}
                <a href="https://pt.m.wikiquote.org/wiki/Idade">Wikipedia</a>.
              </p>
              <hr />
              <div className={`body-L ${styles.engagement}`}>
                <p>
                  <RiEyeLine />
                  13.4k
                </p>
                <p>
                  <RiHeart3Line />
                  4.2k
                </p>
              </div>
            </div>
            <p className="quackQuotesLink body-S neutral-0">
              quackquotes.com.br
            </p>
          </article>
          <div className={styles.iconsContainer}>
            <ButtonIconContainer />
          </div>
          <div className={styles.colorsContainer}>
            <div className="color">hu</div>
          </div>
          <footer className="body-M neutral-20">
            Esta citação está errada?{" "}
            <a href="https://quackredacao.com.br/">Informe o erro</a>.
          </footer>
        </section>
      </div>
    </>
  );
};

export default SingleQuotePage;
