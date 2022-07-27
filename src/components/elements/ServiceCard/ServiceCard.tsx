import React from "react";
import { useUIContext } from "../../../state/context";
import styles from "./ServiceCard.module.css";

export interface IServiceCardProps {
  title: string;
  icon: React.ReactElement;
  description: string;
}

const ServiceCard = ({ title, icon, description }: IServiceCardProps) => {
  const { setIsAppointmentModalOpen } = useUIContext();

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.iconWrapper}>{icon}</div>
      <p className={styles.description}>{description}</p>
      <button onClick={() => setIsAppointmentModalOpen(true)} className={styles.button}>
        {" "}
        Make Appointment{" "}
      </button>
    </section>
  );
};

export default ServiceCard;
