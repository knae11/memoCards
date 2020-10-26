import React, { memo, useRef, useState } from "react";
import styles from "./imageButton.module.css";
const ImageButton = memo(({ imageUploader, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputImageRef = useRef();
  const onClickImageUpload = () => {
    inputImageRef.current.click();
  };
  const onChange = async (e) => {
    setLoading(true);
    const uploaded = await imageUploader.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputImageRef}
        type="file"
        accept="image/*"
        className={styles.input}
        onChange={onChange}
      />
      {!loading && (
        <button
          className={`${styles.button} ${name ? "styles.pink" : "styles.grey"}`}
          onClick={onClickImageUpload}
        >
          {name || "No File"}
        </button>
      )}
      {loading && <div className={styles.spinner}></div>}
    </div>
  );
});

export default ImageButton;
