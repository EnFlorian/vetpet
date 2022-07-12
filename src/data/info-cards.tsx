import { FaAmbulance, FaClipboard, FaClock } from "react-icons/fa";
import styles from "../components/elements/InfoSelectionCard/InfoSelectionCard.module.css";
const infoSelectionCards = [
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

const infoDetailsCards = [
  {
    title: "Yearly Checkups",
    image: "/assets/images/treatment.jpg",
    imageAlt: "Checkup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "24/7 Emergency Service",
    image: "/assets/images/dentistry.jpg",
    imageAlt: "Emergency",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export { infoSelectionCards, infoDetailsCards };
