import React from "react";
import styles from "./ScheduleCard.module.css";
const ScheduleCard = () => {
  return (
    <article className={`container ${styles.scheduleCard}`}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <img src="/assets/images/doc3.jpg" alt="info-image" className={styles.image} width="320px" height="400px" />
        </div>
      </div>
      <section className={styles.rightContent}>
        <section className={styles.timeTable}>
          <div className={styles.row}>
            <p className={styles.day}>Monday </p>
            <p className={styles.time}>8:00 - 20:00</p>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Tuesday </span>
            <span className={styles.time}>8:00 - 20:00</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Wednesday </span>
            <span className={styles.time}>8:00 - 20:00</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Thursday </span>
            <span className={styles.time}>8:00 - 20:00</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Friday </span>
            <span className={styles.time}>8:00 - 20:00</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Saturday </span>
            <span className={styles.time}>8:00 - 12:00</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Sunday </span>
            <span className={styles.time}>8:00 - 17:00</span>
          </div>
        </section>
      </section>
    </article>
  );
};

export default ScheduleCard;
