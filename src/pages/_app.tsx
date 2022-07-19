import "../styles/globals.css";
import "../styles/reset.css";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { UIProvider } from "../state/context";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Head>
        <title>VetPet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default MyApp;
