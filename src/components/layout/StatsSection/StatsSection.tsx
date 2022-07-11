import React from "react";
import styles from "./StatsSection.module.css";
import statsItems from "../../../data/stats-cards";
import { StatsCard } from "../../elements";

const StatsSection = () => {
  const cards = statsItems.map((card, idx) => {
    return <StatsCard key={idx} {...card} />;
  });

  return (
    <ul className={styles.statsSection}>
      <ul className={`container ${styles.list}`}>{cards}</ul>
    </ul>
  );
};

export default StatsSection;
