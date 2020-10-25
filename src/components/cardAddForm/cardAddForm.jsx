import React, { useRef } from "react";
import styles from "./cardAddForm.module.css";

const CardAddForm = ({ onAdd }) => {
  const titleRef = useRef();
  const labelRef = useRef();
  const dateRef = useRef();
  const locationRef = useRef();
  const contentRef = useRef();
  const formRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      title: titleRef.current.value || "",
      label: labelRef.current.value || "",
      date: dateRef.current.value || "",
      location: locationRef.current.value || "",
      content: contentRef.current.value || "",
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="title"
      />
      <select ref={labelRef} className={styles.sub} name="label">
        <option value="movie">Movie</option>
        <option value="book">Book</option>
        <option value="exhibition">Exhibition</option>
      </select>
      <input
        ref={dateRef}
        className={styles.sub}
        name="date"
        type="date"
        placeholder="date"
      />
      <input
        ref={locationRef}
        className={styles.sub}
        name="location"
        type="text"
        placeholder="location"
      />
      <textarea
        ref={contentRef}
        className={styles.textarea}
        type="text"
        name="content"
        placeholder="content"
      ></textarea>
      <button className={styles.button}>Upload</button>
      <button className={styles.button} onClick={onSubmit}>
        Add
      </button>
    </form>
  );
};

export default CardAddForm;
