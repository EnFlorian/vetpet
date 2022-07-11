import React from "react";
import { SectionHeader, TeamMemberCard } from "../../elements";
import styles from "./TeamSection.module.css";
import team from "../../../data/team-cards";

const sectionHeaderContent = {
  firstPart: "Meet the",
  empPart: "Team",
  description: "We are a team of dedicated pet lovers who are determined about keeping your loved ones healthy and happy.",
};

const TeamSection = () => {
  const cards = team.map((card, idx) => {
    return <TeamMemberCard key={idx} {...card} />;
  });

  return (
    <section className={styles.teamSection}>
      <div className={`container ${styles.wrapper}`}>
        <SectionHeader {...sectionHeaderContent} />
        <div className={styles.team}>{cards}</div>
      </div>
    </section>
  );
};

export default TeamSection;
