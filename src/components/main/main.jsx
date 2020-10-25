import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CardInput from "../cardInput/cardInput";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
const Main = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
    history.push("/");
  };
  const [cards, setCards] = useState({});

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <section className={styles.mainBody}>
        <CardInput
          cards={cards}
          updateCard={addOrUpdateCard}
          onAdd={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <CardPreview cards={cards} />
      </section>
      <Footer />
    </section>
  );
};

export default Main;
