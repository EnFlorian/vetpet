import React from "react";
import { SectionHeader, TeamMemberCard } from "../../elements";
import styles from "./TeamSection.module.css";

const sectionHeaderContent = {
  firstPart: "Meet the",
  empPart: "Team",
  description: "We are a team of dedicated Animal lovers who are passionate about keeping your loved ones healthy and happy.",
};

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <SectionHeader {...sectionHeaderContent} />
        <div className={styles.team}>
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
