import React from "react";
import CardAddForm from "../cardAddForm/cardAddForm";
import CardEditForm from "../cardEditForm/cardEditForm";
import styles from "./cardInput.module.css";

const CardInput = ({
  ImageFileInput,
  cards,
  updateCard,
  onAdd,
  deleteCard,
}) => {
  return (
    <section className={styles.cardInput}>
      <h1 className={styles.title}>CardInput</h1>
      <ul className={styles.ul}>
        {Object.keys(cards).map((key) => (
          <CardEditForm
            key={key}
            ImageFileInput={ImageFileInput}
            card={cards[key]}
            updateCard={updateCard}
            deleteCard={deleteCard}
          />
        ))}
        <CardAddForm ImageFileInput={ImageFileInput} onAdd={onAdd} />
      </ul>
    </section>
  );
};

export default CardInput;
