import React from "react";
import Button from "../button/button";
import ImageButton from "../imageButton/imageButton";
import styles from "./cardEditForm.module.css";
const CardEditForm = ({ ImageFileInput, card, updateCard, deleteCard }) => {
  const { title, label, date, location, content, imageName } = card;
  const onFileChange = (file) => {
    updateCard({ ...card, imageName: file.name, imageURL: file.url });
  };
  const handleChange = (e) => {
    if (e.currentTarget === null) return;
    e.preventDefault();
    const { value } = e.currentTarget;
    updateCard({ ...card, [e.currentTarget.name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    deleteCard(card);
  };
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.input}
        type="text"
        value={title}
        name="title"
        onChange={handleChange}
      />
      <select
        className={styles.sub}
        name="label"
        value={label}
        onChange={handleChange}
      >
        <option value="movie">Movie</option>
        <option value="book">Book</option>
        <option value="exhibition">Exhibition</option>
      </select>
      <input
        className={styles.sub}
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
      />
      <input
        className={styles.sub}
        type="text"
        name="location"
        value={location}
        onChange={handleChange}
      />
      <textarea
        className={styles.textarea}
        type="text"
        name="content"
        value={content}
        onChange={handleChange}
      ></textarea>
      <div className={styles.button}>
        <ImageFileInput name={imageName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onSubmit={onSubmit} />
    </form>
  );
};

export default CardEditForm;
