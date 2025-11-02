import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./OurTrees.module.css";

const OurTrees = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const images = [
    "assets/images/selvbetjening.png",
    "assets/images/juletrær-solnedgang.jpg",
    "assets/images/kundebilde-1.jpg",
    "assets/images/juletre-sommer.jpg",
    "assets/images/kundebilde-2.jpg",
    "assets/images/selvbetjening-juletre.png",
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Auto scroll to top on load
  useScrollToTop();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.rootContainer}>
      <header>
        <Navbar />
        <div className={styles.hero}>
          <h1 className={styles.heading}>Våre trær</h1>
          <div className={styles.carouselWrap}>
            <Carousel images={images} />
          </div>
          <div className={styles.heroButtons}>
            <Button
              classname={styles.heroButton}
              onClick={() => {
                scrollToSection("trees");
              }}
            >
              Våre juletrær ↓
            </Button>
            <Button
              classname={styles.heroButton}
              onClick={() => {
                scrollToSection("maintenance");
              }}
            >
              Stell av juletre ↓
            </Button>
          </div>
        </div>
      </header>
      <main>
        {/* Trees Section */}
        <section className={styles.trees} id="trees">
          <div className={styles.tree}>
            <h2>Norsk Gran</h2>
            <p>
              Den klassiske norske julgrana, kjent for sin gode lukt og
              tradisjonelle utseende. Trives best om den får vann jevnlig. Nåler
              og greiner har et naturlig og litt ujevnt uttrykk som gir et ekte
              og nostalgisk preg i stua. Dette er treet for deg som verdsetter
              den gode lukta av ekte gran og et naturlig norsk uttrykk.
            </p>
            <img
              src="/assets/images/norsk-gran.avif"
              alt="norsk gran"
              className={styles.treeImage}
            />
          </div>

          <div className={styles.tree}>
            <h2>Fjelledelgran</h2>
            <p>
              Kjent for myke nåler som ikke stikker, og god holdbarhet. Ofte
              fyldigere enn Norsk gran, med en jevn og symmetrisk form som gir
              et elegant utseende. Fjelledelgran holder seg grønn og frisk
              lenge, og mister sjelden nåler — perfekt for deg som ønsker et
              lettstelt tre med moderne form og høy kvalitet.
            </p>
            <img
              src="/assets/images/fjelledelgran.jpeg"
              alt="fjelledelgran"
              className={styles.treeImage}
            />
          </div>
        </section>

        {/* Tree Maintenance */}
        <section className={styles.maintenance} id="maintenance">
          <div className={styles.description}>
            <h2>Stell av juletre</h2>
            <h3>Når du kommer hjem:</h3>
            <ol className={styles.treeList}>
              <li>
                Skjær av en skive på 2–5 cm nederst på stammen, slik at du får
                et nytt snitt.
              </li>
              <li>
                Sett juletreet i en bøtte med vann, og husk å fylle på jevnlig.
              </li>
              <li>
                La treet stå i en kald gang, kjeller eller garasje minst ett
                døgn før det tas inn i varmen.
              </li>
              <li>Vann treet gjennom hele jula for å bevare friskheten.</li>
            </ol>
          </div>
          <div className={styles.imageContainer}>
            <img src="/assets/images/christmas-tree.jpeg" alt="juletre" />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          classname={styles.scrollTopBtn}
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </Button>
      )}
    </div>
  );
};

export default OurTrees;
