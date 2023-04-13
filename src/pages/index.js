import React, { useEffect, useState } from "react";
import Hero from "../components/sections/Hero";
import QuotesList from "@/src/components/sections/QuotesList";
import QuackTitle from "@/src/components/sections/QuackTitle";
import { Client } from "@notionhq/client";

const Home = ({ results }) => {
  return (
    <main>
      <QuackTitle />
      <Hero />
      <QuotesList results={results} />
    </main>
  );
};

export default Home;

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_KEY });

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });
  } catch (e) {
    console.log("Error while getting data from Notion");
  }

  return { props: { results: response.results } };
}
