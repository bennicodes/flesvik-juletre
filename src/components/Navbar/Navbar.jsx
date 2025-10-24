import { faBars, faTree } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";
import { Link, NavLink } from "react-router";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  // Open / close menu
  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <div className={styles.navbarContainer}>
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
                to="/tjenester"
              >
                Selvhogst
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setIsMenuActive(false)}
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/om-oss"
              >
                Stell av juletre
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
                to="/kontakt"
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
