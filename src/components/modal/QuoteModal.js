import React, { useRef } from "react";
import QuotePageHead from "../quotes/support/QuotePageHead";
import Link from "next/link";
import { RiArrowLeftLine } from "react-icons/ri";
import SingleQuoteBlock from "../quotes/SingleQuoteBlock";
import ButtonIconContainer from "../button/ButtonIcon/ButtonIconContainer";
import MobileButtonsContainer from "../button/MobileButtons/MobileButtonsContainer";
import GradientsContainer from "../button/Gradients/GradientsContainer";
import styles from "./quotemodal.module.css";
import { useRouter } from "next/router";

const QuoteModal = ({ quote }) => {
  const background = useRef();
  const router = useRouter();

  const handleModal = (e) => {
    if (e.target === background.current) {
      router.push("/");
    }
  };

  return (
    <>
      <QuotePageHead quote={quote} />

      <div
        className={styles.background}
        onClick={(e) => handleModal(e)}
        ref={background}
      >
        <section className={styles.content}>
          {/* Back home Link */}

          <Link href="/" className={`body-M neutral-20 ${styles.backLink}`}>
            <RiArrowLeftLine />
            Voltar para citações
          </Link>

          {/* Quote container */}
          <SingleQuoteBlock quote={quote} />

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
    </>
  );
};

export default QuoteModal;
