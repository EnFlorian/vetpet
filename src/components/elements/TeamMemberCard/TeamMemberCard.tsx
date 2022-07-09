import React from "react";
import styles from "./TeamMemberCard.module.css";
const TeamMemberCard = () => {
  return (
    <section className={styles.teamMemberCard}>
      <div className={styles.teamMemberCard__image}>
        <img src="./images/team-member-1.jpg" alt="team-member-1" />
      </div>
    </section>
  );
};

export default TeamMemberCard;
