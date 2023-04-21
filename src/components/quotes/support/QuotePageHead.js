import { joinSentence } from "@/src/pages/api/notionApi";
import Head from "next/head";
import React from "react";

const QuotePageHead = ({ author }) => {
  return (
    <Head>
      <title>Citação de {author}</title>
      <meta
        name="description"
        content={`Citações verificadas de ${author}! Autorias verificadas uma a uma para garantir história e créditos sempre respeitados.`}
      />
    </Head>
  );
};

export default QuotePageHead;
