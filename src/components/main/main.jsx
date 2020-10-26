import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardInput from "../cardInput/cardInput";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
const Main = ({ authService, ImageFileInput, cardRepository }) => {
  const history = useHistory();
  const historyState = history.location.state;

  const [cards, setCards] = useState({});

  const [userId, setUserId] = useState(historyState && historyState.id);
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) return;
    const stopSync = cardRepository.syncCard(userId, (dbcards) =>
      setCards(dbcards)
    );
    console.log(stopSync);
    return () => stopSync();
  }, [userId, cardRepository]);

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (user) {
        setUserId(user.uid);
        console.log(user);
      } else {
        history.push("/");
      }
    });
  }, [userId, history, authService]);

  const addOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <section className={styles.mainBody}>
        <CardInput
          ImageFileInput={ImageFileInput}
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
