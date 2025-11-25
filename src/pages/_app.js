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
    
    // Load analytics script
    const script = document.createElement("script");
    script.src = "https://scripts.simpleanalyticscdn.com/latest.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.removeEventListener("touchstart", function () {}, false);
      // Clean up script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
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
          <meta name="author" content="Wajahat" />
        </Head>

        <Component {...pageProps} />
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
