import { FaClinicMedical, FaClipboard, FaTooth } from "react-icons/fa";
import styles from "../components/elements/ServiceCard/ServiceCard.module.css";

const services = [
  {
    title: "Checkup",
    icon: <FaClipboard className={styles.icon} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Surgery",
    icon: <FaClinicMedical className={styles.icon} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Dental Care",
    icon: <FaTooth className={styles.icon} />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default services;
