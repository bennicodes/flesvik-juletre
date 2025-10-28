import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={styles.aboutSection}>
        <div className={styles.content}>
          <h2 className={styles.header}>🎄 Om Flesvik Juletre</h2>

          <p className={styles.paragraph}>
            Flesvik Juletre holder til langs Mjøsa, nærmere bestemt i Feiring
            nord i Eidsvoll kommune. Gården heter Flesvik og ligger midt mellom
            Gjøvik og Oslo.
          </p>

          <p className={styles.paragraph}>
            På Flesvik gård bor Anett og Knut-Harald Flesvik med sine tre barn.
            Knut-Harald er sjette generasjon på gården. Sommeren 2012 ble de
            første juletreplantene satt ned i jorda – og siden den gang har
            plantingen fortsatt jevnlig.
          </p>

          <div className={styles.contact}>
            <h3>📞 Ta gjerne kontakt for en hyggelig juletreprat</h3>
            <ul>
              <li>Telefon Anett: 970 88 994</li>
              <li>Telefon Knut-Harald: 920 94 713</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;
