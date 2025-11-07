
import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>&copy; {currentYear} Made with ❤️ by Harris</p>
    </footer>
  );
}

export default Footer;
