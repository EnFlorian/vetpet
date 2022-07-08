import Image from "next/image";
import React from "react";
import styles from "./InfoCard.module.css";
const InfoCard = () => {
  return (
    <article className={`container ${styles.infoCard}`}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <img src="/assets/images/doc1.jpg" alt="info-image" className={styles.image} width="320px" height="400px" />
        </div>
      </div>
      <section className={styles.rightContent}>
        <h2 className={styles.title}> 24/7 Emergency Service</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur.
        </p>
        <button className={styles.button}> Read More </button>
      </section>
    </article>
  );
};

export default InfoCard;
