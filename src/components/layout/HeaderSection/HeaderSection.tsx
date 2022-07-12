import React from "react";
import styles from "./HeaderSection.module.css";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useUIContext } from "../../../state/context";

const HeaderSection = () => {
  const { setIsAppointmentModalOpen } = useUIContext();

  return (
    <section className={styles.headerSection}>
      <div className={`container ${styles.wrapper}`}>
        <section className={styles.leftContent}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <FaMapMarkerAlt className={styles.icon} />
              <p className={styles.text}> Hauptstraße 12, Linz</p>
            </li>
            <li className={styles.item}>
              <MdEmail className={styles.icon} />
              <p className={styles.text}> contact@vetpet.com</p>
            </li>
            <li className={styles.item}>
              <FaPhone className={styles.icon} />
              <p className={styles.text}> +43 894 939 229</p>
            </li>
          </ul>
        </section>
        <section className={styles.rightContent}>
          <button className={styles.button} onClick={() => setIsAppointmentModalOpen(true)}>
            Book an Appointment
          </button>
        </section>
      </div>
    </section>
  );
};

export default HeaderSection;
