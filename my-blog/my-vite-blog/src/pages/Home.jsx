import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Profile from "../components/Profile";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import videoStyles from "../styles/BackgroundVideo.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <video
        className={videoStyles.backgroundVideo}
        autoPlay
        muted
        loop
        preload="auto"
      >
        <source src="/videos/7093-198553482_large.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <Header />
      <main className={styles.main}>
        <div className={styles.row}>
          <Carousel className={styles.carousel} />
          <Profile className={styles.profile} />
        </div>
        <BlogCards className={styles.blogCards} />
      </main>
      {/* <Footer className={styles.footer} /> */}
    </div>
  );
};

export default Home;
