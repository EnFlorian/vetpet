import React from "react";
import styles from "./MobileNavbar.module.css";
import { Link as ScrollLink } from "react-scroll";
import { useUIContext } from "../../../state/context";
import { IoClose } from "react-icons/io5";
import { navigation } from "../../../data/navigation";

const MobileNavbar = () => {
  const { setIsMobileMenuOpen } = useUIContext();

  const links = navigation.map((navItem, idx) => {
    return (
      <li key={idx} className={styles.listItem}>
        <ScrollLink smooth={true} spy={true} to={navItem.path} offset={navItem.offSet} onClick={() => setIsMobileMenuOpen(false)}>
          {navItem.name}
        </ScrollLink>
      </li>
    );
  });

  return (
    <nav className={styles.mobileMenu} onClick={() => setIsMobileMenuOpen(false)}>
      <IoClose className={styles.closeIcon} onClick={() => setIsMobileMenuOpen(false)} />
      <ul className={styles.list}>{links}</ul>
    </nav>
  );
};

export default MobileNavbar;
