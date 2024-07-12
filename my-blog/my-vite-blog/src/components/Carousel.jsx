import { useState } from "react";
import styles from "../styles/Carousel.module.css";

const images = [
  "/A_blog_banner_image_titled_'Understanding_Server-S.jpg",
  "/A_blog_banner_image_titled_'Understanding_request.jpg",
  "/A_blog_banner_image_titled_'Why_Are_Gas_Fees_Cruci.jpg",
  "/A_blog_banner_image_titled_'The_Math_and_Code_Behi.jpg",
  "/A_blog_banner_image_titled_'What_is_a_Nonce_in_Blo.jpg",
  "/A_blog_banner_image_titled_'Unveiling_the_Work_of_.jpg",
  "/A_blog_banner_image_titled_'Mining_Part-2__Digital.jpg",
  "/A_blog_banner_image_titled_'Mining_Part-3__Underst.jpg",
  "/A_blog_banner_image_titled_'Mining_Part-4__Demysti.jpg",
  "/A_blog_banner_image_titled_'Mining_Part-5__What_is.jpg",
];

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
        <h1 className={styles.title}></h1>
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
