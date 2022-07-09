import type { NextPage } from "next";
import {
  BlogSection,
  HeroSection,
  InfoSection,
  NewsletterSection,
  ServicesSection,
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
      <TeamSection />
      <BlogSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default Home;
