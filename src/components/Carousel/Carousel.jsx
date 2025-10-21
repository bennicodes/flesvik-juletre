// src/components/Carousel/Carousel.jsx
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ images = [], autoPlay = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Guard against empty array
  if (!images || images.length === 0) return null;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [currentIndex, autoPlay, interval, images.length]);

  return (
    <div
      className={styles.carouselRoot}
      role="region"
      aria-roledescription="carousel"
    >
      {images.map((src, i) => (
        <div
          key={i}
          className={`${styles.slideWrap} ${
            i === currentIndex ? styles.show : ""
          }`}
          aria-hidden={i === currentIndex ? "false" : "true"}
        >
          <img src={src} alt={`Slide ${i + 1}`} className={styles.slideImg} />
        </div>
      ))}

      <button
        className={styles.prevBtn}
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className={styles.nextBtn}
        onClick={nextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${
              i === currentIndex ? styles.dotActive : ""
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
