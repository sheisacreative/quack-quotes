import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/styles.css";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import styles from "./_app.module.css";

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
