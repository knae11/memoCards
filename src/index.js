import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Auth from "./components/services/auth";
import ImageUpload from "./components/services/cloudinary";
import ImageButton from "./components/imageButton/imageButton";

const authService = new Auth();
const imageUploader = new ImageUpload();
const ImageFileInput = (props) => (
  <ImageButton {...props} imageUploader={imageUploader} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} ImageFileInput={ImageFileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
