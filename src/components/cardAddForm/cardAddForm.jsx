import React, { useRef, useState } from "react";
import Button from "../button/button";
import styles from "./cardAddForm.module.css";

const CardAddForm = ({ ImageFileInput, onAdd }) => {
  const titleRef = useRef();
  const labelRef = useRef();
  const dateRef = useRef();
  const locationRef = useRef();
  const contentRef = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      title: titleRef.current.value || "",
      label: labelRef.current.value || "",
      date: dateRef.current.value || "",
      location: locationRef.current.value || "",
      content: contentRef.current.value || "",
      imageName: file.fileName || "",
      imageURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
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
      <div className={styles.button}>
        <ImageFileInput name={file.fileName} onFileChange={onFileChange} />
      </div>
      <div className={styles.button}>
        <Button name="Add" onSubmit={onSubmit} />
      </div>
    </form>
  );
};

export default CardAddForm;
