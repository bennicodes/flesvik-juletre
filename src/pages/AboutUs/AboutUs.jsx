import React from "react";
import styles from "./AboutUs.module.css";
import Navbar from "../../components/Navbar/Navbar";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2 className={styles.header}>🎄 About Flesvik Juletre</h2>
        <p className={styles.paragraph}>
          Flesvik Juletre holder til langs Mjøsa, nærmere bestemt i Feiring nord
          i Eidsvoll kommune. Gården heter Flesvik og ligger midt i mellom
          Gjøvik og Oslo.
        </p>
        <p className={styles.paragraph}>
          På Flesvik gård bor Anett og Knut – Harald Flesvik med sine tre barn.
          Knut – Harald er nå den sjette generasjonen på gården. Sommeren 2012
          ble de første juletreplantene satt ned i jorda, og har blitt plantet
          jevnlig årene som har gått.
        </p>
        <div className={styles.section}>
          <h3>📞 Ta gjerne kontakt med oss for en hyggelig juletreprat</h3>
          <ul className={styles.list}>
            <li>Telefon Anett: 970 88 994</li>
            <li>Telefon Knut-Harald: 920 94 713</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
