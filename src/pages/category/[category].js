import React from "react";
import { fetchFilteredQuotes } from "../api/notionApi";
import QuotesList from "@/src/components/sections/QuotesList";
import QuotesProvider from "@/src/contexts/quotesContext";
import { getTagNameFromSlug } from "@/src/utils/supportFunctions";
import { tags } from "@/src/data/data";
import ActionProvider from "@/src/contexts/actionsContext";

const CategoryPage = ({ filteredQuotes }) => {
  return (
    <QuotesProvider originalQuotes={filteredQuotes}>
      <ActionProvider>
        <QuotesList />
      </ActionProvider>
    </QuotesProvider>
  );
};

export default CategoryPage;

export async function getStaticProps(context) {
  const { category } = context.params;

  try {
    const tagName = await getTagNameFromSlug(category, tags);
    const databaseId = await process.env.NOTION_DATABASE_ID;
    const filteredQuotes = await fetchFilteredQuotes(databaseId, tagName);
    return { props: { filteredQuotes } };
  } catch (e) {
    console.log("🔴 Error getting all quotes from a category :(");
    console.log(e);
    return { props: { originalQuotes: null } };
  }
}

export async function getStaticPaths() {
  try {
    const paths = tags.map((tag) => {
      return {
        params: {
          category: tag.slug,
        },
      };
    });

    return {
      paths,
      fallback: false,
    };
  } catch (e) {
    console.log("🔴🔴🔴 Error generating static paths :( 🔴🔴🔴");
    console.log(e);
    return null;
  }
}
