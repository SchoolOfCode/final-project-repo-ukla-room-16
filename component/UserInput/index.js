import { useState } from "react";
import { motion } from "framer-motion"

import Upload from "../Upload";
import styles from "../../styles/UserInput.module.css";

export default function UserInput({ person, feed, setFeed }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [text, setText] = useState("");
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();

  async function onSubmit(postText) {
    if(text ==="") {
      alert("cannot post an empty text")
      return;
    }
    const postObj = {
      family_id: person.family_id,
      user_id: person.id,
      user_name: person.profile_name,
      post_text: postText,
      created_at: `${Date.now()}`,
      picture: person.picture,
      likes: Number(0),
     post_image: imageSrc
    }

    try {
      const res = await fetch(`${URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postObj),
      });
      const data = await res.json();

      //NEW POST BEING ADDED TO THE ARRAY OF FEEDS USING SPREAD OPERATOR
      const newFeed =[data.payload[0], ...feed]
      setFeed(newFeed);

      document.querySelector(`.${styles.textinput}`).value = "";
      setText(""), setImageSrc(), setUploadData()
    } catch (error) {
      // throw new Error(error);
    }
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.textinput}
        type="text"
        onChange={handleChange}
        placeholder="Shout out to your loved ones:"
      />
      <div className={styles.bottomrow}>
        <Upload imageSrc={imageSrc} setImageSrc={ setImageSrc} uploadData={uploadData} setUploadData={setUploadData}  />

      <motion.div whileHover={{scale:1.1, textShadow:"0px 0px 8px rgb(255,255,255"}} className={styles.postbutton} onClick={() => onSubmit(text)}>
        Post
      </motion.div>
      </div>
      
    </div>
  );

};
