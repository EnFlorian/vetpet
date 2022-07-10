import React from "react";
import { BlogCard, SectionHeader } from "../../elements";
import styles from "./BlogSection.module.css";

const sectionHeaderContent = {
  firstPart: "Care",
  empPart: "Tips",
  description:
    "We are offer many different service to make sure your animals are healthy and stay healthy for their entire life.",
};

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={`container ${styles.wrapper}`}>
        <SectionHeader {...sectionHeaderContent} />
        <div className={styles.cards}>
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
