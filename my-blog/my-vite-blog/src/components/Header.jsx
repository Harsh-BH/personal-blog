import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setDarkMode(storedMode === "true");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        document
          .querySelector(`.${styles.header}`)
          .classList.add(styles.hidden);
      } else {
        document
          .querySelector(`.${styles.header}`)
          .classList.remove(styles.hidden);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tech Blogs</div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/treatments">Treatments</Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.actions}>
        <button className={styles.contactButton}>
          Contact Us <span className={styles.arrow}>&#8594;</span>
        </button>
        <div className={styles.toggleContainer}>
          <input
            type="checkbox"
            id="darkModeToggle"
            className={styles.toggle}
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <label
            htmlFor="darkModeToggle"
            className={styles.toggleLabel}
          ></label>
        </div>
      </div>
    </header>
  );
};

export default Header;
