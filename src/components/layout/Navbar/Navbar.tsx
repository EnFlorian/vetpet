import React from "react";
import styles from "./Navbar.module.css";
import { navigation } from "../../../data/navigation";

export interface INavLink {
  name: string;
  path: string;
}

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <h1>VetPet</h1>
        </div>
        <ul className={styles.menu}>
          {navigation.map((item: INavLink, index: number) => (
            <li className={styles.link} key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
