import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "./images/white.jpg";
const Card = memo(({ card }) => {
  const { title, label, date, location, content, imageURL } = card;
  const url = imageURL || DEFAULT_IMAGE;
  console.log(url);
  return (
    <li className={`${styles.card} ${display(label)}`}>
      <img src={url} alt="poster" className={styles.image} />
      <div className={styles.info}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.label}>{label}</span>
        <span className={styles.date}>{date}</span>
        <span className={styles.location}>{location}</span>
        <p className={styles.content}>{content}</p>
      </div>
    </li>
  );
});

function display(label) {
  switch (label) {
    case "movie":
      return styles.movie;
    case "book":
      return styles.book;
    case "exhibition":
      return styles.exhibition;
  }
}

export default Card;
