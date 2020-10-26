import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import styles from "./app.module.css";
function App({ authService, ImageFileInput }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/main">
            <Main authService={authService} ImageFileInput={ImageFileInput} />
          </Route>
          <Route path="/">
            <Login authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
