import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Page.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>About Us</h1>
        <p>This page contains information about us.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
