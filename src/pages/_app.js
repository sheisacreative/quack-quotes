import Head from "next/head";
import "@/src/styles/globals.css";
import "@/src/styles/styles.css";
import Navbar from "@/src/components/sections/Navbar";
import Footer from "@/src/components/sections/Footer";
import styles from "./_app.module.css";
import { Client } from "@notionhq/client";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quack Quotes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.pageContainer}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
