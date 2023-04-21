import { joinSentence } from "@/src/pages/api/notionApi";
import Head from "next/head";
import React from "react";

const QuotePageHead = ({ Author }) => {
  return (
    <Head>
      <title>Citação de {joinSentence(Author.rich_text)}</title>
      <meta
        name="description"
        content={`Citações verificadas de ${joinSentence(
          Author.rich_text,
        )}! Autorias verificadas uma a uma para garantir história e créditos sempre respeitados.`}
      />
    </Head>
  );
};

export default QuotePageHead;
