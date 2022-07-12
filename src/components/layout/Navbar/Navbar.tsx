import React from "react";
import styles from "./Navbar.module.css";
import { FaPaw } from "react-icons/fa";
import { navigation } from "../../../data/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUIContext } from "../../../state/context";

export interface INavLink {
  name: string;
  path: string;
}

const Navbar = () => {
  const { setIsMobileMenuOpen } = useUIContext();
  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <FaPaw className={styles.icon} />
          <h1>VetPet</h1>
        </div>
        <ul className={styles.menu}>
          {navigation.map((item: INavLink, index: number) => (
            <li className={styles.link} key={index}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
          <li className={styles.mobileMenu} onClick={() => setIsMobileMenuOpen(true)}>
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
