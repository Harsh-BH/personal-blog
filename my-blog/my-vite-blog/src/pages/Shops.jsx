import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Page.module.css";

const Shops = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1>Shops</h1>
        <p>This page contains information about shops.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Shops;
