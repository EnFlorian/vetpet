import type { NextPage } from "next";
import Head from "next/head";
import {
  BlogSection,
  HeroSection,
  InfoSection,
  NewsletterSection,
  ServicesSection,
  StatsSection,
  TeamSection,
} from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>VetPet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles.container}>
        <HeroSection />
        <InfoSection />
        <ServicesSection />
        <StatsSection />
        <TeamSection />
        <BlogSection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Home;
