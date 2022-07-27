import styles from "./NotificationModal.module.css";
import Modal from "react-modal";
import { useUIContext } from "../../../state/context";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
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
  },
};

interface INotificationModalProps {
  message: string;
  description: string;
}

Modal.setAppElement("#__next");

const NotificationModal = ({ message, description }: INotificationModalProps) => {
  const { isNotificationModalOpen, setIsNotificationModalOpen } = useUIContext();

  return (
    <Modal
      isOpen={isNotificationModalOpen}
      onRequestClose={() => setIsNotificationModalOpen(false)}
      style={customStyles}
      contentLabel="Confirm Delete"
    >
      <section className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>{message}</h2>
          <p className={styles.description}>{description}</p>
        </div>
        <div>
          <button className={styles.button} onClick={() => setIsNotificationModalOpen(false)}>
            Close
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default NotificationModal;
