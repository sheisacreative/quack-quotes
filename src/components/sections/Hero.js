import React from "react";
import BigQuote from "../quotes/BigQuote";
import styles from "./Hero.module.css";
import { useActionContext } from "@/src/contexts/actionsContext";
import ShareModal from "./ShareModal";

const Hero = () => {
  const { showShareModal } = useActionContext();

  return (
    <>
      {showShareModal && <ShareModal />}
      <section className={`container ${styles.hero}`}>
        <BigQuote />
      </section>
    </>
  );
};

export default Hero;
