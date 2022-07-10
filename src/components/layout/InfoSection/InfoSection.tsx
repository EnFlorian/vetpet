import React from "react";
import { InfoCard, ScheduleCard } from "../../elements";
import styles from "./InfoSection.module.css";
import { FaAmbulance, FaClock, FaClipboard } from "react-icons/fa";
const InfoSection = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <section className={styles.infoSection}>
      <div className={styles.bgWrapper}>
        <div className={`container ${styles.wrapper}`}>
          <ul className={styles.options}>
            <li tabIndex={1} className={styles.option} onClick={() => setTab(0)}>
              <FaAmbulance className={styles.icon} />
              <p className={styles.link}>Emergency</p>
            </li>
            <li tabIndex={2} className={styles.option} onClick={() => setTab(1)}>
              <FaClock className={styles.icon} />
              <p>Opening Hours</p>
            </li>
            <li tabIndex={3} className={styles.option} onClick={() => setTab(2)}>
              <FaClipboard className={styles.icon} />
              <p>Checkups</p>
            </li>
          </ul>
        </div>
      </div>
      <section className={styles.content}>
        {tab === 0 && <ScheduleCard />}
        {tab === 1 && <InfoCard />}
        {tab === 2 && <InfoCard />}
      </section>
    </section>
  );
};

export default InfoSection;
