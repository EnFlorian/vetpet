import React from "react";
import { FaAmbulance } from "react-icons/fa";
import styles from "./ServiceCard.module.css";
const ServiceCard = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>24/7 Emergency Service</h1>
      <div className={styles.iconWrapper}>
        <FaAmbulance className={styles.icon} />
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <button className={styles.button}> Read More </button>
    </section>
  );
};

export default ServiceCard;
