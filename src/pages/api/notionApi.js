import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
// const databaseId = process.env.NOTION_DATABASE_ID;

export const fetchQuotes = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
};

export const getAllQuotesIds = (quotesObject) => {
  const quotesArray = Array.from(quotesObject);

  return quotesArray.map((quote) => {
    return {
      params: {
        id: quote.id,
      },
    };
  });
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

// join sentences that weren't together on the Notion API
export const joinSentence = (myArray) => {
  let sentence = "";

  myArray.map((item) => {
    sentence = `${sentence}${item.plain_text}`;
  });

  return sentence;
};

// Creates an array with tags
export const getTagsArray = (array) => {
  const tagsArray = array.map((tag) => {
    return tag.name;
  });

  return tagsArray;
};

// Clear data from a single quote
export const clearSingleQuote = (singleQuote) => {
  return {
    author: joinSentence(singleQuote.author.rich_text),
    authorTitle: joinSentence(singleQuote.authorTitle.rich_text),
    quote: joinSentence(singleQuote.quote.title),
    source: joinSentence(singleQuote.source.rich_text),
    tags: getTagsArray(singleQuote.tags.multi_select),
    verificationLink: singleQuote.verificationLink.url,
    verificationSource: joinSentence(singleQuote.verificationSource.rich_text),
    status: singleQuote.status.status.name,
  };
};

// Clear data from the API and selects just important data
export const clearMultipleQuotes = (quotes) => {
  const clearedQuotes = quotes.map((singleQuote) => {
    const clearedSingleQuote = clearSingleQuote(singleQuote.properties);

    return { ...clearedSingleQuote, id: singleQuote.id };
  });

  // Filters to show only approved quotes
  const approvedQuotes = clearedQuotes.filter(
    (quote) => quote.status === "Approved",
  );

  return approvedQuotes;
};
