import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Auth from "./components/services/auth";
import ImageUpload from "./components/services/cloudinary";
import ImageButton from "./components/imageButton/imageButton";
import CardRepository from "./components/services/cardRepositary";

const authService = new Auth();
const imageUploader = new ImageUpload();
const cardRepository = new CardRepository();
const ImageFileInput = memo((props) => (
  <ImageButton {...props} imageUploader={imageUploader} />
));
ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      ImageFileInput={ImageFileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
