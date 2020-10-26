import firebaseApp from "./firebase";
class CardRepository {
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }

  syncCard(userId, callback) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      userId && callback(snapshot.val());
    });
    return () => ref.off();
  }
}

export default CardRepository;
