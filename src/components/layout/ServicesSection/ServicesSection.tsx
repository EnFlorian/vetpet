import React from "react";
import Slider from "react-slick";
import { InfoCard, SectionHeader, ServiceCard } from "../../elements";
import styles from "./ServicesSection.module.css";
const ServicesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <section className={`container ${styles.wrapper}`}>
      <SectionHeader />
      <div className={styles.services}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServicesSection;
