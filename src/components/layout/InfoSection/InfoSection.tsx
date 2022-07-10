import React from "react";
import { InfoCard } from "../../elements";
import styles from "./InfoSection.module.css";
import { FaAmbulance, FaClock, FaClipboard } from "react-icons/fa";
const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <div className={styles.bgWrapper}>
        <div className={`container ${styles.wrapper}`}>
          <ul className={styles.options}>
            <li tabIndex={1} className={styles.option}>
              <FaAmbulance className={styles.icon} />
              <p className={styles.link}>Emergency</p>
            </li>
            <li tabIndex={2} className={styles.option}>
              <FaClock className={styles.icon} />
              <p>Opening Hours</p>
            </li>
            <li tabIndex={3} className={styles.option}>
              <FaClipboard className={styles.icon} />
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
