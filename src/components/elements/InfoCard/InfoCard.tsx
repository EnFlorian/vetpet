import React from "react";
import styles from "./InfoCard.module.css";

export interface IInfoCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const InfoCard = ({ title, description, image, imageAlt }: IInfoCardProps) => {
  return (
    <article className={`container ${styles.infoCard}`}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={imageAlt} className={styles.image} />
        </div>
      </div>
      <section className={styles.rightContent}>
        <h2 className={styles.title}> {title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}> Read More </button>
      </section>
    </article>
  );
};

export default InfoCard;
