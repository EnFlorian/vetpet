import React from "react";
import styles from "./InfoSelectionCard.module.css";

export interface IInfoSelectionCardProps {
  icon: React.ReactElement;
  title: string;
  tab: number;
  tabIdx: number;
  handlerFunction: (tab: number) => void;
}

const InfoSelectionCard = ({ icon, title, tab, tabIdx, handlerFunction }: IInfoSelectionCardProps) => {
  return (
    <li tabIndex={tabIdx} className={styles.option} onClick={() => handlerFunction(tab)}>
      {icon}
      <p className={styles.link}>{title}</p>
    </li>
  );
};

export default InfoSelectionCard;
