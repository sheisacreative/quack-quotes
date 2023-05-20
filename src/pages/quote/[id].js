import React from "react";
import {
  clearSingleQuote,
  fetchQuotes,
  getAllQuotesIds,
  getPage,
} from "../api/notionApi";
import ActionProvider from "@/src/contexts/actionsContext";
import GradientProvider from "@/src/contexts/gradientContext";
import QuoteModal from "@/src/components/modal/QuoteModal";

const SingleQuotePage = ({ originalQuote }) => {
  const quote = clearSingleQuote(originalQuote);

  return (
    <ActionProvider>
      <GradientProvider>
        <QuoteModal quote={quote} />
      </GradientProvider>
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
