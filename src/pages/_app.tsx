import "../styles/globals.css";
import "../styles/reset.css";
import "/node_modules/slick-carousel/slick/slick.css";
import "/node_modules/slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import { Footer, HeaderSection, Navbar } from "../components/layout";
import { UIProvider } from "../state/context";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <HeaderSection />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UIProvider>
  );
}

export default MyApp;
