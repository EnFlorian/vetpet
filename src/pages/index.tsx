import type { NextPage } from "next";
import Head from "next/head";
import { AppointmentModal } from "../components/elements";
import {
  BlogSection,
  HeroSection,
  InfoSection,
  NewsletterSection,
  ServicesSection,
  StatsSection,
  TeamSection,
} from "../components/layout";
import { useUIContext } from "../state/context";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { isAppointmentModalOpen } = useUIContext();
  return (
    <>
      <Head>
        <title>VetPet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
      {isAppointmentModalOpen && <AppointmentModal />}
    </>
  );
};

export default Home;
