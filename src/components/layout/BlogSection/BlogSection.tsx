import React from "react";
import { BlogCard, SectionHeader } from "../../elements";
import styles from "./BlogSection.module.css";
import blogPosts from "../../../data/blog-cards";

const sectionHeaderContent = {
  firstPart: "Care",
  empPart: "Tips",
  description:
    "We are offer many different service to make sure your animals are healthy and stay healthy for their entire life.",
};

const BlogSection = () => {
  const cards = blogPosts.map((blogPost, idx) => {
    return <BlogCard key={idx} {...blogPost} />;
  });

  return (
    <section className={styles.blogSection}>
      <div className={`container ${styles.wrapper}`}>
        <SectionHeader {...sectionHeaderContent} />
        <div className={styles.cards}>{cards}</div>
      </div>
    </section>
  );
};

export default BlogSection;
