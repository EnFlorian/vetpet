import React from "react";
import styles from "./Newsletter.module.css";

const NewsletterSection = () => {
  return (
    <section className={`container ${styles.subscriptionSection}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Stay in touch with Us</h1>
        <p className={styles.description}> Subscribe to our newsletter to get the latest news and updates.</p>
        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder="Enter Email..." />
          <button className={styles.button}>Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
