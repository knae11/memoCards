import React from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";
const Main = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
    history.push("/");
  };
  return (
    <>
      <Header onLogout={onLogout} />
      <h1>main</h1>
      <Footer />
    </>
  );
};

export default Main;
