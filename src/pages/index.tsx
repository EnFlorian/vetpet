import type { NextPage } from "next";
import {
  BlogSection,
  ContactSection,
  HeroSection,
  InfoSection,
  NewsletterSection,
  ServicesSection,
  StatsSection,
  TeamSection,
  TestimonialsSection,
} from "../components/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};

export default Home;
