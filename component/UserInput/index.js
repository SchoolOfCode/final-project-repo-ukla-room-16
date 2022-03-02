import { useState, useEffect } from "react";
import styles from "../../styles/UserInput.module.css";
// import {useRouter} from "next/router";

const UserInput = ({ person }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [text, setText] = useState("");

  async function onSubmit(postText) {
    const postObj = {
      family_id: person.family_id,
      user_id: person.id,
      user_name: person.profile_name,
      post_text: postText,
      created_at: `${Date.now()}`,
      picture: person.picture,
      likes: Number(0)
    };
    console.log("postobj", postObj)
    try {
      const res = await fetch(`${URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postObj),
      });
      const data = await res.json();
      document.querySelector(`.${styles.textinput}`).value = "";
    } catch (error) {
      throw new Error(error);
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
      <button className={styles.postbutton} onClick={() => onSubmit(text)}>
        Post
      </button>
    </div>
  );
};

export default UserInput;
