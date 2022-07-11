import React from "react";
import styles from "./StatsSection.module.css";
import { FaTooth } from "react-icons/fa";
const StatsSection = () => {
  return (
    <ul className={styles.statsSection}>
      <ul className={`container ${styles.list}`}>
        <li className={styles.item}>
          <FaTooth className={styles.icon} />
          <span className={styles.number}>100</span>
          <p className={styles.text}>Dogs Adopted</p>
        </li>
        <li className={styles.item}>
          <FaTooth className={styles.icon} />
          <span className={styles.number}>500</span>
          <p className={styles.text}>Dogs Adopted</p>
        </li>
        <li className={styles.item}>
          <FaTooth className={styles.icon} />
          <span className={styles.number}>300</span>
          <p className={styles.text}>Dogs Adopted</p>
        </li>
        <li className={styles.item}>
          <FaTooth className={styles.icon} />
          <span className={styles.number}>100</span>
          <p className={styles.text}>Dogs Adopted</p>
        </li>
      </ul>
    </ul>
  );
};

export default StatsSection;
