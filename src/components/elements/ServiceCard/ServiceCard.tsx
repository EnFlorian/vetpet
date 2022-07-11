import React from "react";
import styles from "./ServiceCard.module.css";

export interface IServiceCardProps {
  title: string;
  icon: React.ReactElement;
  description: string;
}

const ServiceCard = ({ title, icon, description }: IServiceCardProps) => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.iconWrapper}>{icon}</div>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}> Read More </button>
    </section>
  );
};

export default ServiceCard;
