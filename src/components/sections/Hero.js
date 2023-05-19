import React from "react";
import BigQuote from "../quotes/BigQuote";
import styles from "./Hero.module.css";
import { useActionContext } from "@/src/contexts/actionsContext";
import ShareModal from "./ShareModal";
import Feedback from "../support/Feedback";
import { AnimatePresence } from "framer-motion";

const Hero = () => {
  const { showShareModal, showFeedback } = useActionContext();

  return (
    <>
      {showShareModal && <ShareModal />}
      <AnimatePresence>{showFeedback && <Feedback />}</AnimatePresence>
      <section className={`container ${styles.hero}`}>
        <BigQuote />
      </section>
    </>
  );
};

export default Hero;
