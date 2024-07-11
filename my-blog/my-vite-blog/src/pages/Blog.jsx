import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const post = {
    title: "My First Blog Post",
    date: "July 11, 2024",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      nisi est, facilisis ac tellus ac, egestas hendrerit magna. Vivamus
      commodo ligula et justo viverra, a cursus nulla placerat.
    `,
  };

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <article className={styles.post}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>{post.date}</p>
          <div className={styles.content}>
            {post.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
