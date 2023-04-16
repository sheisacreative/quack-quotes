import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
// const databaseId = process.env.NOTION_DATABASE_ID;

export const fetchQuotes = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
};

export const getAllQuotesPaths = (quotesObject) => {
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
