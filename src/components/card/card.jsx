import React from "react";
import styles from "./card.module.css";
const Card = ({ card }) => {
  const { title, label, date, location, content } = card;
  return (
    <li className={styles.card}>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg"
        alt="poster"
        className={styles.image}
      />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.label}>{label}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.location}>{location}</span>
        <p className={styles.content}>{content}</p>
      </div>
    </li>
  );
};

export default Card;
