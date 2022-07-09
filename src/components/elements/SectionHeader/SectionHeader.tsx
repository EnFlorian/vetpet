import React from "react";
import styles from "./SectionHeader.module.css";
const SectionHeader = () => {
  return (
    <section className={styles.sectionHeader}>
      <h2 className={styles.title}>
        Emergency <span className={styles.accent}>Services</span>
      </h2>
      <p className={styles.description}>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </section>
  );
};

export default SectionHeader;
