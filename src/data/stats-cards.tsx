import { FaClinicMedical, FaClipboard, FaShower, FaTooth } from "react-icons/fa";
import styles from "../components/elements/StatsCard/StatsCard.module.css";

const statsItems = [
  {
    icon: <FaTooth className={styles.icon} />,
    number: 300,
    text: "Dental Procedures",
  },
  {
    icon: <FaClipboard className={styles.icon} />,
    number: 2000,
    text: "Checkups",
  },
  {
    icon: <FaClinicMedical className={styles.icon} />,
    number: 400,
    text: "Surgeries",
  },
  {
    icon: <FaShower className={styles.icon} />,
    number: 2000,
    text: "Groomed Pets",
  },
];

export default statsItems;
