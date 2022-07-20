import Image from "next/image";
import React from "react";
import { useUIContext } from "../../../state/context";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const { setIsAppointmentModalOpen } = useUIContext();

  return (
    <section className={styles.wrapper}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftContent}>
          <h1 className={styles.title}>Keep your friends healthy</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur.
          </p>
          <button className={styles.button} onClick={() => setIsAppointmentModalOpen(true)}>
            Book an Appointment
          </button>
        </div>
        <div className={styles.rightContent}>
          <Image src="/assets/images/pattern.png" alt="hero-image" className={styles.image} width="550px" height="400px" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
