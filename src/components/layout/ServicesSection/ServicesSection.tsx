import React from "react";
import services from "../../../data/service-cards";
import { SectionHeader, ServiceCard } from "../../elements";
import styles from "./ServicesSection.module.css";

const sectionHeaderContent = {
  firstPart: "Our",
  empPart: "Services",
  description:
    "We are offer many different service to make sure your animals are healthy and stay healthy for their entire life.",
};

const ServicesSection = () => {
  const cards = services.map((service, idx) => {
    return (
      <li key={idx}>
        <ServiceCard {...service} />
      </li>
    );
  });

  return (
    <section id="services" className={`container ${styles.wrapper}`}>
      <SectionHeader {...sectionHeaderContent} />
      <ul className={styles.services}>{cards}</ul>
    </section>
  );
};

export default ServicesSection;
