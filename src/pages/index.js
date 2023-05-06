import React from "react";
import Hero from "../components/sections/Hero";
import QuotesList from "@/src/components/sections/QuotesList";
import QuackTitle from "@/src/components/sections/QuackTitle";
import QuotesProvider from "../contexts/quotesContext";
import { fetchQuotes } from "./api/notionApi";
import ActionProvider from "../contexts/actionsContext";

const Home = ({ originalQuotes }) => {
  return (
    <QuotesProvider originalQuotes={originalQuotes}>
      <ActionProvider>
        <main>
          <QuackTitle />
          <Hero />
          <QuotesList />
        </main>
      </ActionProvider>
    </QuotesProvider>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    const originalQuotes = await fetchQuotes(databaseId);

    return { props: { originalQuotes } };
  } catch (e) {
    console.log("Error getting all quotes :(");
    console.log(e);
    return { props: { quotes: null } };
  }
}
