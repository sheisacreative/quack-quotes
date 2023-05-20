import { useActionContext } from "@/src/contexts/actionsContext";
import Head from "next/head";
import React from "react";
import ShareModal from "../../modal/ShareModal";
import { AnimatePresence } from "framer-motion";
import Feedback from "../../support/Feedback";

const QuotePageHead = ({ quote }) => {
  const { showShareModal, showFeedback } = useActionContext();

  return (
    <>
      <Head>
        <title>Citação de {quote.author}</title>
        <meta
          name="description"
          content={`Citações verificadas de ${quote.author}! Autorias verificadas uma a uma para garantir história e créditos sempre respeitados.`}
        />
      </Head>
      {showShareModal && <ShareModal quote={quote} />}
      <AnimatePresence>{showFeedback && <Feedback />}</AnimatePresence>
    </>
  );
};

export default QuotePageHead;
