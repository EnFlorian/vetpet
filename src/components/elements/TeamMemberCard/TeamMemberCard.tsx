import React from "react";
import styles from "./TeamMemberCard.module.css";

export interface ITeamMemberCardProps {
  name: string;
  position: string;
  image: string;
  alt: string;
}

const TeamMemberCard = ({ name, position, image, alt }: ITeamMemberCardProps) => {
  return (
    <section className={styles.teamMemberCard}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}> {name}</h3>
        <p className={styles.position}>{position}</p>
        <button className={styles.button}> Contact </button>
      </div>
    </section>
  );
};

export default TeamMemberCard;
