import Link from "next/link";
import React from "react";
import styles from "./404.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page was not found</p>
      <Link href="/">
        <a className={styles.link}>Back Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
