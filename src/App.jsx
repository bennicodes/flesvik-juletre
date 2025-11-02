import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Button from "./components/Button/Button";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  const navigate = useNavigate();
  useScrollToTop(); // Auto scroll to top

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
              <Button
                classname={styles.primaryButton}
                onClick={() => {
                  navigate("/bestill");
                }}
              >
                Bestill juletre
              </Button>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className={styles.descriptionSection}>
          <div className={styles.description}>
            <div className={styles.textContainer}>
              <h2>Sjølhogst på Flesvik Gård</h2>
              <p>
                Flesvik Juletre handler ikke bare om å kjøpe et tre, men om å
                skape minner. Gjør selvhogst til en årlig tradisjon for hele
                familien – med latter, bålkos og ekte julestemning.
              </p>
              <p>
                Gå en rolig tur mellom snødekte grantrær, kjenn duften av frisk
                skog og sag ned ditt eget juletre. Bålpanna står klar til bruk –
                perfekt for en liten pause med varm kakao mens barna leker i
                snøen. Er det nok snø, finner du flotte akebakker rett i
                nærheten.
              </p>
              <p>
                Du kan ta med din egen sag, eller låne en av oss. Når du har
                funnet drømmetreet, kjører du det gjennom juletrepakkeren og
                laster det enkelt på bilen eller hengeren – husk stropper om du
                skal frakte det på taket.
              </p>
              <p>Betal trygt og enkelt med Vipps, og vips så du er ferdig!</p>
            </div>
            <div className={styles.imageContainer}>
              <img
                src="/assets/images/bålpanne.jpg"
                alt="bålpanne"
                className={styles.descriptionImage}
              />
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={`${styles.description} ${styles.secondDescription}`}>
            <div className={styles.imageContainer}>
              <img
                src="/assets/images/selvbetjening.png"
                alt="juletre"
                className={styles.descriptionImage}
              />
            </div>
            <div className={styles.textContainer}>
              <div>
                <h2>Selvbetjening på Haakens gård</h2>
                <h4>
                  <strong>Adresse:</strong> Østre Hurdalveg 46, 2074 Eidsvoll
                  Verk
                </h4>
              </div>
              <p>
                På vei hjem fra jobb eller ut på helgetur? Stikk innom Haakens
                gård på Eidsvoll Verk og finn ditt perfekte juletre – raskt,
                enkelt og helt i eget tempo. Her finner du flotte, nyhogde trær
                fra Flesvik Juletre i Feiring.
              </p>
              <p>
                Alt du trenger å vite står forklart på plakatene ved området.
                Velg deg et tre, pakk det inn om du ønsker – og betal enkelt med
                Vipps. Så er du ferdig!
              </p>
              <p>
                Flesvik Juletre ønsker deg lykke til med å finne et flott tre
                som skaper ekte julestemning i hjemmet ditt.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
