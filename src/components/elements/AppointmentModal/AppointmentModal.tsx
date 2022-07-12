import Modal from "react-modal";
import { useUIContext } from "../../../state/context";
import styles from "./AppointmentModal.module.css";
import { IoCloseCircleSharp } from "react-icons/io5";
import React from "react";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    zIndex: "10",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "transparent",
    zIndex: "9999",
  },
};

Modal.setAppElement("#__next");

const AppointmentModal = () => {
  const { isAppointmentModalOpen, setIsAppointmentModalOpen } = useUIContext();

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsAppointmentModalOpen(false);
  };

  return (
    <Modal
      isOpen={isAppointmentModalOpen}
      onRequestClose={() => setIsAppointmentModalOpen(false)}
      style={customStyles}
      contentLabel="Confirm Delete"
    >
      <section className={styles.wrapper}>
        <button className={styles.close} onClick={() => setIsAppointmentModalOpen(false)}>
          <IoCloseCircleSharp className={styles.icon} />
        </button>
        <h2 className={styles.title}>Appointment Request</h2>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod.</p>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Name..." />
          <input className={styles.input} type="text" placeholder="Email..." />
          <input className={styles.input} type="text" placeholder="Phone..." />
          <textarea className={styles.textArea} placeholder="Enter a Message..." />
          <button className={styles.button} onClick={(e) => handleSubmit(e)}>
            Send Message
          </button>
        </form>
      </section>
    </Modal>
  );
};

export default AppointmentModal;
