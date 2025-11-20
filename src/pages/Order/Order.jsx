import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import useScrollToTop from "../../hooks/useScrollToTop.js";
import useSeo from "../../hooks/useSeo.js";

import styles from "./Order.module.css";

const Order = () => {
  useScrollToTop(); // Auto scroll to top

  useSeo({
    title: "Bestill juletre | Flesvik Juletre",
    description:
      "Bestill juletre fra Flesvik Juletre – velg type, høyde og form. Trygg betaling med Vipps og levering i Eidsvoll-området.",
  });

  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.hero}></div>
        <section className={styles.formSection}>
          <div className={styles.formDescription}>
            <h1>Bestilling</h1>
            <div className={styles.descriptionParagraphs}>
              <p>
                Fyll ut skjemaet under for å bestille juletre. Huk av for ønsket
                type, form og høyde - eller legg til en melding med dine
                preferanser.
              </p>
              <p>
                Når bestillingen er sendt, vil du motta bekreftelse på e-post.
                Bestillingen er gyldig når betaling via Vipps{" "}
                <span className={styles.number}>
                  <strong>(725259)</strong> er mottatt.
                </span>
              </p>
              <br />
              <p>
                Levering skjer i uke{" "}
                <span>
                  <strong>49, 50 og 51 </strong>
                </span>
                til disse postnumrene:{" "}
                <span>
                  <strong>2093, 2092, 2080, 2074, 2072, 2070.</strong>
                </span>
              </p>
              <p>Ta kontakt for eventuell levering utenom disse postnumrene.</p>
            </div>
          </div>
          <div className={styles.formContainer}>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Order;
