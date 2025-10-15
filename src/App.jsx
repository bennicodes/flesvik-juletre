import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.rootContainer}>
      <header className={styles.header}>
        <div className={styles.navbarContainer}>
          <Navbar />
        </div>
        <section className={styles.heroSection}>
          <h1 className={styles.heroHeading}>Flesvik Juletre</h1>
          <div className={styles.heroIntro}>
            <h3 className={styles.introHeading}>
              Finn ditt perfekte juletre – Selvhogst i Feiring eller
              selvbetjening på Eidsvoll Verk.
            </h3>
          </div>
          {/* <div className={styles.}></div> */}
        </section>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
