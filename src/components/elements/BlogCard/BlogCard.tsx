import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = () => {
  return (
    <section className={styles.blogCard}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <img src="/assets/images/doc2.jpg" alt="blog-image" />
        </div>
      </div>
      <section className={styles.rightContent}>
        <div className={styles.author}>
          <h2 className={styles.name}>Dr. Doolittle Daniel</h2>
          <p className={styles.position}> Owner of VetPet</p>
        </div>
        <div className={styles.blog}>
          <h3 className={styles.title}>How to keep your pet healthy</h3>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur.
          </p>

          <h4 className={styles.instruction}>How to keep your pet healthy</h4>
          <ul className={styles.list}>
            <li className={styles.item}> lorem ipsum dolor sit amet</li>
            <li className={styles.item}> lorem ipsum dolor sit amet</li>
            <li className={styles.item}> lorem ipsum dolor sit amet</li>
            <li className={styles.item}> lorem ipsum dolor sit amet</li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default BlogCard;
