import firebaseApp from "./firebase";
import firebase from "firebase";

class Auth {
  login(providerName) {
    const provider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(provider);
  }

  logout() {
    return firebaseApp.auth().signOut();
  }

  onAuthChanged(onChangedCallback) {
    firebaseApp.auth().onAuthStateChanged((user) => {
      onChangedCallback(user);
    });
  }
}

export default Auth;
