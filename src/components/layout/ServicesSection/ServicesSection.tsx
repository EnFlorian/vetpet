import React from "react";
import { SectionHeader, ServiceCard } from "../../elements";
import styles from "./ServicesSection.module.css";
const ServicesSection = () => {
  const sectionHeaderContent = {
    firstPart: "Our",
    empPart: "Services",
    description:
      "We are offer many different service to make sure your animals are healthy and stay healthy for their entire life.",
  };

  return (
    <section className={`container ${styles.wrapper}`}>
      <SectionHeader {...sectionHeaderContent} />
      <div className={styles.services}>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </section>
  );
};

export default ServicesSection;
