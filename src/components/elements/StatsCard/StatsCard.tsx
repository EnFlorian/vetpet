import React from "react";
import styles from "./StatsCard.module.css";

export interface IStatsCardProps {
  icon: React.ReactElement;
  number: number;
  text: string;
}

const StatsCard = ({ icon, number, text }: IStatsCardProps) => {
  return (
    <li className={styles.item}>
      {icon}
      <span className={styles.number}>{number}</span>
      <p className={styles.text}>{text}</p>
    </li>
  );
};

export default StatsCard;
