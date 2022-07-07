import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <p className={styles.copyright}> &copy; VetPet - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
