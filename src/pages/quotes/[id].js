import Head from "next/head";
import React from "react";
import styles from "./[id].module.css";
import Link from "next/link";
import ButtonIconContainer from "@/src/components/button/ButtonIconContainer";
import { RiArrowLeftLine, RiEyeLine, RiHeart3Line } from "react-icons/ri";
import Image from "next/image";
import nelson from "../../../public/images/author/nelson-rodrigues.jpg";
import GradientsContainer from "@/src/components/button/GradientsContainer";
import {
  fetchQuotes,
  getAllQuotesIds,
  getPage,
  joinSentence,
} from "../api/notionApi";

const SingleQuotePage = ({ quote }) => {
  const {
    Author,
    AuthorTitle,
    Quote,
    Source,
    VerificationLink,
    VerificationSource,
  } = quote;

  return (
    <>
      <Head>
        <title>Citação</title>
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
                  <Image
                    src={nelson}
                    alt={`Foto de ${joinSentence(Author.rich_text)}`}
                    className={styles.authorImg}
                  />
                  <div>
                    <p className="body-M">
                      <cite>
                        <Link href="/" className={styles.authorName}>
                          {joinSentence(Author.rich_text)}
                        </Link>
                      </cite>
                    </p>
                    <p className="body-S">
                      {joinSentence(AuthorTitle.rich_text)}
                    </p>
                  </div>
                </div>

                <blockquote>
                  <p className={`heading-M`}>{Quote.title[0].plain_text}</p>
                </blockquote>
                <p className={`body-S ${styles.verification} `}>
                  {joinSentence(Source.rich_text)} Verificado através de{" "}
                  <a href={VerificationLink.url} target="blank">
                    {joinSentence(VerificationSource.rich_text)}
                  </a>
                  .
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

export async function getStaticProps(context) {
  const page = await getPage(context.params.id);

  return { props: { quote: page.properties } };
}

export async function getStaticPaths() {
  const databaseId = process.env.NOTION_DATABASE_ID;
  const quotes = await fetchQuotes(databaseId);
  const paths = await getAllQuotesIds(quotes);

  return {
    paths,
    fallback: false,
  };
}
