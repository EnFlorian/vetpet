import Link from "next/link";
import React from "react";
import styles from "./TeamMemberCard.module.css";
const TeamMemberCard = () => {
  return (
    <section className={styles.teamMemberCard}>
      <img src="../../assets/images/doc1.jpg" alt="team-member-1" className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.name}> John Doe</h3>
        <p className={styles.position}>Owner, CEO, Founder</p>
        <button className={styles.button}> Contact </button>
      </div>
    </section>
  );
};

export default TeamMemberCard;
