import React, { useEffect } from "react";
import { InfoCard, ScheduleCard } from "../../elements";
import styles from "./InfoSection.module.css";
import { infoSelectionCards, infoDetailsCards } from "../../../data/info-cards";

const InfoSection = () => {
  const [tab, setTab] = React.useState(1);

  useEffect(() => {
    const options = document.getElementsByClassName(styles.option);
    options[1]?.classList.add(styles.selected);
  }, []);

  const tabs = infoSelectionCards.map((card, idx) => {
    return (
      <li tabIndex={idx} key={idx} className={styles.option} onClick={(e) => handleTabChange(e)}>
        {card.icon}
        <p className={styles.link}>{card.title}</p>
      </li>
    );
  });

  const handleTabChange = (e: React.MouseEvent) => {
    const options = document.getElementsByClassName(styles.option);
    for (let i = 0; i < options.length; i++) {
      options[i]?.classList.remove(styles.selected);
    }
    e.currentTarget.classList.add(styles.selected);

    let tabIdx = Number(e.currentTarget.getAttribute("tabindex"));
    setTab(tabIdx);
  };

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
