import React from "react";
import { blogPosts } from "../constants";
import styles from "../styles/BlogCards.module.css";

const BlogCards = () => {
  return (
    <section className={styles.cardsWrapper}>
      {blogPosts.map((post) => (
        <div key={post.id} className={styles.cardGridSpace}>
          <div className={styles.num}>{post.id}</div>
          <a
            className={styles.card}
            href={post.link}
            style={{ "--bg-img": `url(${post.imageUrl})` }}
          >
            <div>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <div className={styles.date}>{post.date}</div>
              <div className={styles.tags}>
                {post.tags.map((tag, index) => (
                  <div key={index} className={styles.tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
};

export default BlogCards;
