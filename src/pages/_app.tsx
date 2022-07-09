import "../styles/globals.css";
import "../styles/reset.css";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { Footer, Navbar } from "../components/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
