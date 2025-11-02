import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useScrollToTop from "../../hooks/useScrollToTop";
import styles from "./Order.module.css";

const Order = () => {
  useScrollToTop(); // Auto scroll to top
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
      </header>
      <main>
        <div className={styles.hero}></div>
        <section className={styles.formSection}>
          <div className={styles.formDescription}>
            <h2>Bestilling</h2>
            <div className={styles.descriptionParagraphs}>
              <p>
                Fyll ut skjemaet under for å bestille juletre. Huk av for ønsket
                type, form og høyde - eller legg til en melding med dine
                preferanser.
              </p>
              <p>
                Når bestillingen er sendt, vil du motta bekreftelse på e-post.
                Bestillingen er gyldig når betaling via Vipps{" "}
                <strong>(725259)</strong> er mottatt.
              </p>
              <br />
              <p>
                Levering skjer i uke <strong>49, 50 og 51 </strong>
                til disse postnumrene:{" "}
                <strong>2093, 2092, 2080, 2074, 2072, 2070.</strong>
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
