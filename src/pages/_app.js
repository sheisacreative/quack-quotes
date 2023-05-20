import Head from "next/head";
import "@/src/styles/globals.css";
import "@/src/styles/styles.css";
import styles from "./_app.module.css";
import { favicon } from "../../public/favicon.ico";
import Layout from "../components/support/Layout";
import NavigationProvider from "../contexts/navigationContext";
import Script from "next/script";
import * as gtag from "../utils/gtag";

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
      {/* Google tag (gtag.js) */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <NavigationProvider>
        <Layout>
          <div className={styles.pageContainer}>
            <Component {...pageProps} />
          </div>
        </Layout>
      </NavigationProvider>
    </>
  );
}
