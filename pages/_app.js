import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Quack Quotes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
