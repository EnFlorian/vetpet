import React from "react";
import styles from "./SectionHeader.module.css";

interface ISectionHeaderProps {
  firstPart: string;
  empPart: string;
  description: string;
}

const SectionHeader = ({ firstPart, empPart, description }: ISectionHeaderProps) => {
  return (
    <section className={styles.sectionHeader}>
      <h2 className={styles.title}>
        {firstPart} <span className={styles.accent}>{empPart}</span>
      </h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default SectionHeader;
