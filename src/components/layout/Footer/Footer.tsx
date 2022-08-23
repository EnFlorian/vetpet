import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.wrapper} container`}>
        <p className={styles.copyright}>
          {" "}
          &copy; {new Date().getFullYear()} - <span className={styles.accent}>VetPet</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
