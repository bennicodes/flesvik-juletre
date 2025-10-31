import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Order.module.css";

const Order = () => {
  return (
    <div className={styles.container}>
      <header>
        <Navbar />
        <div className={styles.hero}></div>
      </header>
      <main>
        <section className={styles.formSection}>
          <div className={styles.formDescription}>
            <h2>Bestilling</h2>
            <div className={styles.descriptionParagraphs}>
              <p>
                Fyll ut skjemaet under for å bestille juletre. Huk av for ønsket
                type, form og høyde – eller legg til en melding med dine
                preferanser.
              </p>
              <p>
                Når bestillingen er sendt, vil du motta bekreftelse på e-post.
                Bestillingen er gyldig når betaling via Vipps{" "}
                <strong>(725259)</strong> er mottatt.
              </p>
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
