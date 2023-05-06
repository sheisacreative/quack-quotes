import React from "react";
import styles from "./[id].module.css";
import Link from "next/link";
import ButtonIconContainer from "@/src/components/button/ButtonIcon/ButtonIconContainer";
import { RiArrowLeftLine, RiEyeLine, RiHeart3Line } from "react-icons/ri";
import GradientsContainer from "@/src/components/button/Gradients/GradientsContainer";
import {
  clearSingleQuote,
  fetchQuotes,
  getAllQuotesIds,
  getPage,
} from "../api/notionApi";
import MobileButtonsContainer from "@/src/components/button/MobileButtons/MobileButtonsContainer";
import Author from "@/src/components/quotes/support/Author";
import QuotePageHead from "@/src/components/quotes/support/QuotePageHead";
import QuoteText from "@/src/components/quotes/support/QuoteText";
import VerificationText from "@/src/components/quotes/support/VerificationText";
import ActionProvider from "@/src/contexts/actionsContext";

const SingleQuotePage = ({ originalQuote }) => {
  const quote = clearSingleQuote(originalQuote);

  return (
    <ActionProvider>
      <QuotePageHead {...quote} />

      <div className={styles.background}>
        <section className={styles.content}>
          {/* Back home Link */}
          <Link href="/" className={`body-M neutral-20 ${styles.backLink}`}>
            <RiArrowLeftLine />
            Voltar para citações
          </Link>

          {/* Quote container */}
          <article
            className={styles.quoteContainerBG}
            style={{
              background: "linear-gradient(180deg, #FF7A00 0%, #DBB800 100%)",
            }}
          >
            <div className={styles.quoteContainer}>
              <div className={styles.quote}>
                <Author {...quote} image={true} />
                <QuoteText {...quote} />
                <VerificationText {...quote} />
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

          {/* Desktop Actions Icons */}
          <ButtonIconContainer
            className={`${styles.iconsContainer}`}
            quote={quote}
          />

          {/* Mobile Actions */}
          <MobileButtonsContainer quote={quote} />

          {/* Gradient Icons */}

          <GradientsContainer className={styles.gradientsContainer} />

          {/* Is this quote wrong? */}
          <footer className={`body-S neutral-20 ${styles.footer}`}>
            <p>
              Esta citação está errada?{" "}
              <a href="https://quackredacao.com.br/">Informe o erro</a>.
            </p>
          </footer>
        </section>
      </div>
    </ActionProvider>
  );
};

export default SingleQuotePage;

export async function getStaticProps(context) {
  try {
    const page = await getPage(context.params.id);
    return { props: { originalQuote: page.properties } };
  } catch (e) {
    console.log("Error retrieving page props :(");
    console.log(e);
    return { props: { originalQuote: null } };
  }
}

export async function getStaticPaths() {
  try {
    const databaseId = await process.env.NOTION_DATABASE_ID;
    const quotes = await fetchQuotes(databaseId);
    const paths = await getAllQuotesIds(quotes);

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log("Error generating static paths :(");
    console.log(e);
    return null;
  }
}
