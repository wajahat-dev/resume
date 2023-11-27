import "../styles/globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import { useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import { ContextoProvider } from "../appContext";
import Modal from "react-modal";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.addEventListener("touchstart", function () {}, false);
    smoothscroll.polyfill();
    Modal.setAppElement("#__next");
    return () => {
      document.removeEventListener("touchstart", function () {}, false);
    };
  }, []);
  return (
    <ContextoProvider>
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <meta name="author" content="Wajahat Ali" />
        </Head>

        <Component {...pageProps} />
              <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img
          src="https://queue.simpleanalyticscdn.com/noscript.gif"
          alt=""
          referrerPolicy="no-referrer-when-downgrade"
        />
      </noscript>
      </>
    </ContextoProvider>
  );
}

export default MyApp;
