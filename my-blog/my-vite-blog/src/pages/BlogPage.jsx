import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/BlogPage.module.css";
import Header from "../components/Header";

const BlogPage = ({ blog }) => {
  const { title, subtitle, date, tags, imageUrl, content, tableOfContents } =
    blog;

  return (
    <div className={styles.blogPage}>
      <Header />

      <div className={styles.content}>
        <div className={styles.mainContent}>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <p className={styles.date}>Published: {date}</p>
          {tags.map((tag, index) => (
            <div key={index} className={styles.tag}>
              {tag}
            </div>
          ))}
          <img src={imageUrl} alt={title} className={styles.mainImage} />
          <div className={styles.blogText}>{content}</div>
        </div>
        <aside className={styles.sidebar}>
          <div className={styles.tableOfContents}>
            <h2>TABLE OF CONTENTS</h2>
            <ul>
              {tableOfContents.map((item, index) => (
                <li key={index}>
                  {item.title}
                  {item.subItems && (
                    <ul>
                      {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

BlogPage.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    imageUrl: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    tableOfContents: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subItems: PropTypes.arrayOf(PropTypes.string),
      })
    ).isRequired,
  }).isRequired,
};

export default BlogPage;
