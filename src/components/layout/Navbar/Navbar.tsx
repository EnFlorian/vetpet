import React, { ReactText } from "react";
import styles from "./Navbar.module.css";
import { FaPaw } from "react-icons/fa";
import { navigation } from "../../../data/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUIContext } from "../../../state/context";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const { setIsMobileMenuOpen } = useUIContext();

  const links = navigation.map((link, index: number) => (
    <li className={styles.link} key={index}>
      <ScrollLink smooth={true} spy={true} to={link.path} offset={link.offSet}>
        {link.name}
      </ScrollLink>
    </li>
  ));

  return (
    <div className={styles.navbar}>
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.logo}>
          <FaPaw className={styles.icon} />
          <h1>VetPet</h1>
        </div>
        <ul className={styles.menu}>
          {links}
          <li className={styles.mobileMenu} onClick={() => setIsMobileMenuOpen(true)}>
            <GiHamburgerMenu />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
