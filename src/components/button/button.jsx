import React from "react";
import styles from "./button.module.css";
const Button = ({ name, onSubmit }) => (
  <button className={styles.button} onClick={onSubmit}>
    {name}
  </button>
);

export default Button;