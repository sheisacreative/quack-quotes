import Head from "next/head";
import "@/src/styles/globals.css";
import "@/src/styles/styles.css";
import Navbar from "@/src/components/sections/Navbar";
import Footer from "@/src/components/sections/Footer";
import styles from "./_app.module.css";
import { favicon } from "../../public/favicon.ico";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <title>Quack Quotes</title>
        <meta
          name="description"
          content="Citações verificadas de verdade! Autorias verificadas uma a uma para garantir história e créditos sempre respeitados."
        />
        <link rel="icon" type="image/x-icon" href={favicon} />
      </Head>
      <div className={styles.pageContainer}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
