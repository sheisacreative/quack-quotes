import React from "react";
import { fetchQuotes } from "../api/notionApi";
import NavigationProvider from "@/src/contexts/navigationContext";
import Layout from "@/src/components/support/Layout";
import QuotesList from "@/src/components/sections/QuotesList";

const CategoryPage = ({ originalQuotes }) => {
  return (
    <NavigationProvider originalQuotes={originalQuotes}>
      <Layout>
        <QuotesList />
      </Layout>
    </NavigationProvider>
  );
};

export default CategoryPage;

export async function getStaticProps() {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID;

    const originalQuotes = await fetchQuotes(databaseId);

    return { props: { originalQuotes } };
  } catch (e) {
    console.log("Error getting all quotes :(");
    console.log(e);
    return { props: { originalQuotes: null } };
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: false,
  };
}
