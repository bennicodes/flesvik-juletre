import {
  faInstagram,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Contact */}
        <section className={styles.contactSection}>
          <h3 className={styles.heading}>Kontakt</h3>
          <ul className={styles.list}>
            <li>
              Mail:{" "}
              <a href="mailto:flesvikgaard@gmail.com">flesvikgaard@gmail.com</a>
            </li>
            <li>
              <a href="tel:+4797088994​">Anett: +47 970 88 994</a>
            </li>
            <li>
              <a href="tel:+4792094713​">Knut-Harald: +47 920 94 713</a>
            </li>
          </ul>
        </section>

        {/* Copyright / quick links */}
        <section className={styles.copyrightSection}>
          <p className={styles.copy}>© 2025 Pareo Webdesign</p>
          <p>All rights reserved</p>
        </section>

        {/* Social */}
        <section className={styles.socialSection}>
          <h3 className={`${styles.heading} ${styles.socialHeading}`}>
            Sosiale medier
          </h3>
          <ul className={styles.socialList}>
            <li>
              <a
                href="https://www.instagram.com/flesvikjuletre/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialIcon}
                />
                <p className={styles.instagramHandle}>Instagram</p>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/flesvikjuletre"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  className={styles.socialIcon}
                />
                <p className={styles.instagramHandle}>Facebook</p>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
