import type { NextPage } from "next";
import { Fragment } from "react";
import { AppointmentModal } from "../components/elements";
import {
  BlogSection,
  Footer,
  HeaderSection,
  HeroSection,
  InfoSection,
  MobileNavbar,
  Navbar,
  NewsletterSection,
  ServicesSection,
  StatsSection,
  TeamSection,
} from "../components/layout";
import { useUIContext } from "../state/context";

const Home: NextPage = () => {
  const { isAppointmentModalOpen, isMobileMenuOpen } = useUIContext();
  return (
    <Fragment>
      <HeaderSection />
      <Navbar />
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
      {isAppointmentModalOpen && <AppointmentModal />}
      {isMobileMenuOpen && <MobileNavbar />}
    </Fragment>
  );
};

export default Home;
