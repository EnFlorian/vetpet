import React from "react";
import { SectionHeader } from "../../elements";
import styles from "./TeamSection.module.css";

const sectionHeaderContent = {
  firstPart: "Meet the",
  empPart: "Team",
  description: "We are a team of dedicated Animal lovers who are passionate about building great products.",
};

const TeamSection = () => {
  return (
    <section className={styles.themeSection}>
      <SectionHeader {...sectionHeaderContent} />
    </section>
  );
};

export default TeamSection;
