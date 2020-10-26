class ImageUpload {
  async upload(file) {
    const url = "https://api.cloudinary.com/v1_1/nauni/image/upload";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "hq5zf37l");

    const result = await fetch(url, {
      method: "POST",
      body: formData,
    });
    return result.json();
  }
}

export default ImageUpload;
