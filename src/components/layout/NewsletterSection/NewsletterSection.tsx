import React from "react";
import { useUIContext } from "../../../state/context";
import styles from "./Newsletter.module.css";

const NewsletterSection = () => {
  const { setIsNotificationModalOpen } = useUIContext();
  const [sending, setSending] = React.useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSending(true);
    //demo purposes
    setTimeout(() => {
      setIsNotificationModalOpen(true);
      setSending(false);
    }, 1000);
  };

  return (
    <section className={`container ${styles.subscriptionSection}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Stay in touch with Us</h1>
        <p className={styles.description}> Subscribe to our newsletter to get the latest news and updates.</p>
        <form className={styles.form}>
          <input className={styles.input} type="email" placeholder="Enter Email..." />
          <button className={styles.button} onClick={(e) => handleSubmit(e)}>
            {sending ? "Sending..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
