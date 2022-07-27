import type { NextPage } from "next";
import { Fragment } from "react";
import { AppointmentModal, NotificationModal } from "../components/elements";
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
  const { isAppointmentModalOpen, isMobileMenuOpen, isNotificationModalOpen } = useUIContext();
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
      {isNotificationModalOpen && (
        <NotificationModal message="Thank You!" description="You will shortly receive a confirmation by email." />
      )}
      {isMobileMenuOpen && <MobileNavbar />}
    </Fragment>
  );
};

export default Home;
