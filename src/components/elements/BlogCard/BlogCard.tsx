import React from "react";
import styles from "./BlogCard.module.css";

export interface IBlogCardProps {
  authorName: string;
  authorPosition: string;
  authorImage: string;
  authorAlt: string;
  blogTitle: string;
  blogText: string;
  instructionsTitle: string;
  instructions: string[];
}

const BlogCard = ({
  authorName,
  authorPosition,
  authorImage,
  authorAlt,
  blogTitle,
  blogText,
  instructionsTitle,
  instructions,
}: IBlogCardProps) => {
  return (
    <section className={styles.blogCard}>
      <div className={styles.leftContent}>
        <div className={styles.imageWrapper}>
          <img src={authorImage} alt={authorAlt} className={styles.image} />
        </div>
      </div>
      <section className={styles.rightContent}>
        <div className={styles.author}>
          <h2 className={styles.name}>{authorName}</h2>
          <p className={styles.position}> {authorPosition}</p>
        </div>
        <div className={styles.blog}>
          <h3 className={styles.title}>{blogTitle}</h3>
          <p className={styles.description}>{blogText}</p>

          <h4 className={styles.instruction}>{instructionsTitle}</h4>
          <ul className={styles.list}>
            {instructions.map((instruction, idx) => {
              return (
                <li className={styles.item} key={idx}>
                  {instruction}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default BlogCard;
