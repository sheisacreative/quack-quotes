import Head from "next/head";
import React from "react";
import styles from "./[id].module.css";
import Link from "next/link";
import ButtonIconContainer from "@/src/components/button/ButtonIconContainer";
import { RiArrowLeftLine, RiEyeLine, RiHeart3Line } from "react-icons/ri";
import Image from "next/image";
import nelson from "../../../public/images/author/nelson-rodrigues.jpg";
import GradientsContainer from "@/src/components/button/GradientsContainer";

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
              <div className={styles.quote}>
                <div className={`${styles.author}`}>
                  <Image src={nelson} alt="" className={styles.authorImg} />
                  <div>
                    <p className="body-M">
                      <cite>
                        <Link href="/" className={styles.authorName}>
                          Nelson Rodrigues
                        </Link>
                      </cite>
                    </p>
                    <p className="body-S">escritor e poeta brasileiro</p>
                  </div>
                </div>

                <blockquote>
                  <p className={`heading-M`}>
                    A mais tola das virtudes é a idade. Que significa ter
                    quinze, dezessete, dezoito ou vinte anos? Há pulhas, há
                    imbecis, há santos, há gênios de todas as idades.
                  </p>
                </blockquote>
                <p className={`body-S ${styles.verification} `}>
                  Escrito em: “Flor de Obsessão: as 1000 melhores frases de
                  Nelson Rodrigues”. Verificado:{" "}
                  <a href="https://pt.m.wikiquote.org/wiki/Idade">Wikipedia</a>.
                </p>
              </div>
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
            <p className={`${styles.quackQuotesLink} body-S neutral-0`}>
              quackquotes.com.br
            </p>
          </article>
          <div className={styles.iconsContainer}>
            <ButtonIconContainer />
          </div>
          <div className={styles.colorsContainer}>
            <GradientsContainer />
          </div>
          <footer className={`body-S neutral-20 ${styles.footer}`}>
            <p>
              Esta citação está errada?{" "}
              <a href="https://quackredacao.com.br/">Informe o erro</a>.
            </p>
          </footer>
        </section>
      </div>
    </>
  );
};

export default SingleQuotePage;
