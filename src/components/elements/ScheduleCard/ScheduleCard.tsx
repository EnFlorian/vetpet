import React from "react";
import styles from "./ScheduleCard.module.css";
import schedule from "../../../data/schedule";
const ScheduleCard = () => {
  return (
    <article className={`container ${styles.scheduleCard}`}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <img src="/assets/images/grom1.jpg" alt="info-image" className={styles.image} />
        </div>
      </div>
      <section className={styles.rightContent}>
        <section className={styles.timeTable}>
          <div className={styles.row}>
            <p className={styles.day}>Monday </p>
            <p className={styles.time}>{schedule.monday}</p>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Tuesday </span>
            <span className={styles.time}>{schedule.tuesday}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Wednesday </span>
            <span className={styles.time}>{schedule.wednesday}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Thursday </span>
            <span className={styles.time}>{schedule.thursday}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Friday </span>
            <span className={styles.time}>{schedule.friday}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Saturday </span>
            <span className={styles.time}>{schedule.saturday}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.day}>Sunday </span>
            <span className={styles.time}>{schedule.sunday}</span>
          </div>
        </section>
      </section>
    </article>
  );
};

export default ScheduleCard;
