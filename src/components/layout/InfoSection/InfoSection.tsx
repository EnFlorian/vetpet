import Image from "next/image";
import React from "react";
import { InfoCard } from "../../elements";
import styles from "./InfoSection.module.css";
const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.bgWrapper}>
        <div className={`container ${styles.wrapper}`}>
          <ul className={styles.options}>
            <li tabIndex={1} className={styles.option}>
              <img src="/assets/icons/ambulance.svg" alt="hero-image" className={styles.image} />
              <p className={styles.link}>Emergency</p>
            </li>
            <li tabIndex={2} className={styles.option}>
              <img src="/assets/icons/ambulance.svg" alt="hero-image" className={styles.image} />
              <p>Opening Hours</p>
            </li>
            <li tabIndex={3} className={styles.option}>
              <img src="/assets/icons/ambulance.svg" alt="hero-image" className={styles.image} />
              <p>Checkups</p>
            </li>
          </ul>
        </div>
      </div>
      <section className={styles.content}>
        <InfoCard />
      </section>
    </section>
  );
};

export default InfoSection;
