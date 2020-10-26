import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";
const Login = ({ authService }) => {
  const history = useHistory();
  const goToMain = (userId) => {
    history.push({
      pathname: "/main",
      state: { id: userId },
    });
  };
  useEffect(() => {
    authService.onAuthChanged((user) => {
      user && goToMain(user.uid);
    });
  });
  const handleLogin = (e) => {
    const providerName = e.target.innerText;
    authService
      .login(providerName)
      .then((data) => goToMain(data.user.uid))
      .catch((error) => {
        console.log(error);
        history.push("/");
      });
  };
  return (
    <section className={styles.loginBody}>
      <Header />
      <section>
        <h2>LOGIN</h2>
        <ul className={styles.loginList}>
          <li className={styles.item}>
            <button className={styles.button} onClick={handleLogin}>
              Google
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={handleLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>

      <Footer />
    </section>
  );
};

export default Login;
