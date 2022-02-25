import { useState } from "react";

import styles from "../../styles/UserInput.module.css";

const UserInput = () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [text, setText] = useState("");
  console.log(text);

  async function onSubmit(postText) {
    const postObj = {
      family_id: 1,
      user_id: 3,
      user_name: "Alan",
      post_text: postText,
      created_at: `${Date.now()}`,
    };

    const res = await fetch(`${URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObj),
    });
    const data = await res.json();
    console.log(data);
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
      <button className={styles.submitbutton} onClick={() => onSubmit(text)}>
        Post
      </button>
    </div>
  );
};

export default UserInput;
