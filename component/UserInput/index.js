import { useState, useEffect } from "react";
import styles from "../../styles/UserInput.module.css";
// import {useRouter} from "next/router";

const UserInput = ({ person, feed, setFeed }) => {
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
      likes: Number(0),
    };
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
      console.log("feed", feed);


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
