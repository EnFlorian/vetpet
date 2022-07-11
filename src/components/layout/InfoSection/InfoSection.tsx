import React from "react";
import { InfoCard, InfoSelectionCard, ScheduleCard } from "../../elements";
import styles from "./InfoSection.module.css";
import infoCards from "../../../data/info-cards";

const InfoSection = () => {
  const [tab, setTab] = React.useState(0);

  const tabs = infoCards.map((card, idx) => {
    return <InfoSelectionCard key={idx} handlerFunction={setTab} {...card} />;
  });

  return (
    <section className={styles.infoSection}>
      <div className={styles.bgWrapper}>
        <div className={`container ${styles.wrapper}`}>
          <ul className={styles.options}>{tabs}</ul>
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
