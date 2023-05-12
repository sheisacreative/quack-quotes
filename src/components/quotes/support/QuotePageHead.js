import { useActionContext } from "@/src/contexts/actionsContext";
import { joinSentence } from "@/src/pages/api/notionApi";
import Head from "next/head";
import React from "react";
import ShareModal from "../../sections/ShareModal";

const QuotePageHead = ({ quote }) => {
  const { showShareModal } = useActionContext();
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
    </>
  );
};

export default QuotePageHead;
