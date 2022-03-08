import { useState } from "react";
import styles from "../../styles/Upload.module.css";
import Image from "next/image";
import camera from "../../images/camera.png";
import { motion } from "framer-motion";
export default function Upload({
  imageSrc,
  setImageSrc,
  uploadData,
  setUploadData,
}) {
  console.log(imageSrc, uploadData);

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "uklaupload");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dkcjkoqsq/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);
  }

  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        method="post"
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
      >
        <motion.div
          whileHover={{
            scale: 1.3,
          }}
          onClick={() => {
            document.querySelector("#postPic").click();
          }}
        >
          <Image src={camera} width="30" height="30" />
        </motion.div>
        <input
          id="postPic"
          type="file"
          name="file"
          style={{ display: "none" }}
        />

        {imageSrc && <img src={imageSrc} />}

        {imageSrc && !uploadData && <button>Upload Image</button>}
      </form>
    </div>
  );
}
