import { useState } from "react";
import styles from "../styles/Carousel.module.css";

const images = ["/mountain.jpg", "/sunset.jpg", "/road.jpg", "/ocean.jpg"];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carouselInner}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={styles.carouselImage}
          />
        ))}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Carousels</h1>
      </div>
      <div className={styles.navigation}>
        <button
          onClick={goToPrev}
          className={`${styles.navButton} ${styles.prevButton}`}
        >
          ❮
        </button>
        <button
          onClick={goToNext}
          className={`${styles.navButton} ${styles.nextButton}`}
        >
          ❯
        </button>
      </div>
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
