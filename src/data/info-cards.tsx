import { FaAmbulance, FaClipboard, FaClock } from "react-icons/fa";
import styles from "../components/layout/InfoSection/InfoSection.module.css";
const infoCards = [
  {
    tab: 0,
    tabIdx: 1,
    title: "Emergencies",
    icon: <FaAmbulance className={styles.icon} />,
  },
  {
    tab: 1,
    tabIdx: 2,
    title: "Opening Hours",
    icon: <FaClock className={styles.icon} />,
  },
  {
    tab: 2,
    tabIdx: 3,
    title: "Checkups",
    icon: <FaClipboard className={styles.icon} />,
  },
];

export default infoCards;
