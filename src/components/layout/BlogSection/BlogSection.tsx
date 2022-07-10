import React from "react";
import { BlogCard, SectionHeader } from "../../elements";
import styles from "./BlogSection.module.css";

const sectionHeaderContent = {
  firstPart: "Our",
  empPart: "Services",
  description:
    "We are offer many different service to make sure your animals are healthy and stay healthy for their entire life.",
};

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={`container ${styles.wrapper}`}>
        <SectionHeader {...sectionHeaderContent} />
        <BlogCard />
      </div>
    </section>
  );
};

export default BlogSection;
