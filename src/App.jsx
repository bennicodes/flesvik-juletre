import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const carouselImages = [
    "/assets/images/kundebilde-2.jpg",
    "/assets/images/kundebilde-1.jpg",
    "/assets/images/snøbilde-flesvik.jpg",
    "/assets/images/kundebilde-4.jpg",
    "/assets/images/juletrær-solnedgang.jpg",
    "/assets/images/kundebilde-3.jpg",
    "/assets/images/juletre-sommer.jpg",
  ];

  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <div className={styles.navbarContainer}>
          <Navbar />
        </div>

        {/* HERO SECTION */}
        <section className={styles.heroSection}>
          <video
            src="/assets/videos/snow-animation.mp4"
            autoPlay
            loop
            muted
            className={styles.heroVideo}
          ></video>

          <div className={styles.heroOverlay}>
            <h1 className={styles.heroHeading}>Flesvik Juletre</h1>

            <h3 className={styles.introHeading}>
              Finn ditt perfekte juletre – selvhogst i Feiring, selvbetjening på
              Eidsvoll Verk, eller få det levert rett på hjem i ukene 49–51.
            </h3>

            <div className={styles.buttonGroup}>
              <Button classname={styles.primaryButton}>Bestill juletre</Button>
            </div>

            {/* <div className={styles.introDescription}>
              <div className={styles.descriptionContainer}>
                <h4>Sjølhogst hos Flesvik Juletre</h4>
                <p>
                  Opplev ekte julestemning – finn ditt eget juletre, sag det
                  selv og skap en tradisjon hele familien vil elske.
                </p>
                <a href="#" className={styles.descriptionLink}>
                  Les mer
                </a>
              </div>

              <div className={styles.descriptionContainer}>
                <h4>Selvbetjening på Haakens gård</h4>
                <p>
                  Raskt og enkelt – finn ditt perfekte juletre på Haakens gård!
                  Velg, pakk og betal med Vipps – juleglede på et blunk.
                </p>
                <a href="#" className={styles.descriptionLink}>
                  Les mer
                </a>
              </div>

              <div className={styles.carouselWrapper}>
                <Carousel images={carouselImages} autoPlay interval={5000} />
              </div>
            </div> */}
          </div>
        </section>
      </header>

      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
