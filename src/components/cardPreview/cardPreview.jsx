import React from "react";
import Card from "../card/card";
import styles from "./cardPreview.module.css";

const CardPreview = ({ cards }) => {
  return (
    <section className={styles.cardPreview}>
      <h1 className={styles.title}>CardPreview</h1>
      <ul className={styles.ul}>
        {cards &&
          Object.keys(cards).map((key) => <Card key={key} card={cards[key]} />)}
      </ul>
    </section>
  );
};

export default CardPreview;
