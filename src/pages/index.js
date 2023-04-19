import React, { useEffect, useState } from "react";
import Hero from "../components/sections/Hero";
import QuotesList from "@/src/components/sections/QuotesList";
import QuackTitle from "@/src/components/sections/QuackTitle";
import QuotesProvider from "../contexts/quotesContext";
import TestIndex from "./test";
import { fetchQuotes } from "./api/notionApi";
import Link from "next/link";

const Home = ({ quotes }) => {
  return (
    <QuotesProvider quotes={quotes}>
      <main>
        <Link href={"/test"}>Go to Test Index</Link>

        <QuackTitle />
        <Hero />
        <QuotesList />
      </main>
    </QuotesProvider>
  );
};

export default Home;

export async function getStaticProps() {
  const databaseId = process.env.NOTION_DATABASE_ID;

  const quotes = await fetchQuotes(databaseId);

  return { props: { quotes: quotes } };
}
