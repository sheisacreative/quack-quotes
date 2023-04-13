// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default async function handler(req, res) {
//   await readItem();
//   // res.status(200).json({ message: "It worked! :)" });
// }

// import { Client } from "@notionhq/client";

// const notion = new Client({ auth: process.env.NOTION_KEY });
// const pageId = process.env.NOTION_DATABASE_ID;

// export default async function readDatabase() {
//   try {
//     const response = await notion.pages.retrieve({ page_id: pageId });
//     console.log(response);
//   } catch (error) {
//     console.error(error.body);
//   }
// }

// async function handler(req, res) {
//   // Run the cors middleware
//   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
//   await NextCors(req, res, {
//     // Options
//     methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//     origin: "*",
//     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   });

//   // Rest of the API logic
//   await readItem();
//   res.json({ message: "Hello NextJs Cors!" });
// }
