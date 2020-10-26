import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.title}>Naeun, 2020.10</h4>
    </footer>
  );
});

export default Footer;
