import { faBars, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Open / close menu
  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  useEffect(() => {
    const scrollThreshold = 80;
    const handleScroll = () => setScrolled(window.scrollY > scrollThreshold);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body from scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuActive ? "hidden" : "auto";
  }, [isMenuActive]);

  return (
    <div
      className={`${styles.navbarContainer} ${scrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logoLink}>
            <FontAwesomeIcon icon={faTree} />
            Flesvik Juletre
          </Link>
        </div>
        {/* Links */}
        <nav>
          <ul
            className={`${styles.navLinks} ${
              isMenuActive ? styles.navLinksActive : ""
            }`}
          >
            <li>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                Hjem
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/våre-trær"
              >
                Våre trær
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                to="/om-oss"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Om oss
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                to="/bestill"
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                Bestill
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* Menu on smaller screens */}
        <Button classname={styles.menuButton} onClick={handleMenuToggle}>
          <FontAwesomeIcon className={styles.menuIcon} icon={faBars} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
