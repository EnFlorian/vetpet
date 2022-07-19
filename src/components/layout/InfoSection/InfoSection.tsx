import React, { useRef } from "react";
import { InfoCard, InfoSelectionCard, ScheduleCard } from "../../elements";
import styles from "./InfoSection.module.css";
import { infoSelectionCards, infoDetailsCards } from "../../../data/info-cards";

const InfoSection = () => {
  const [tab, setTab] = React.useState(1);

  const tabs = infoSelectionCards.map((card, idx) => {
    return <InfoSelectionCard key={idx} handlerFunction={setTab} {...card} />;
  });

  return (
    <section id="about" className={styles.infoSection}>
      <div className={styles.bgWrapper}>
        <div className={`container ${styles.wrapper}`}>
          <ul className={styles.options}>{tabs}</ul>
        </div>
      </div>
      <section className={styles.content}>
        {tab === 1 && <ScheduleCard />}
        {tab === 0 && <InfoCard {...infoDetailsCards[1]} />}
        {tab === 2 && <InfoCard {...infoDetailsCards[0]} />}
      </section>
    </section>
  );
};

export default InfoSection;
