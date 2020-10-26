import React, { memo } from "react";
import styles from "./header.module.css";
const Header = memo(({ onLogout }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Review Cards</h2>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          logout
        </button>
      )}
    </header>
  );
});

export default Header;
