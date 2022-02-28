import { useState, useEffect } from "react";
import styles from "../../styles/UserInput.module.css";
// import {useRouter} from "next/router";


const UserInput = ({person}) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [text, setText] = useState("");
  console.log(text);
  
  
  async function onSubmit(postText) {
    const postObj = {
      family_id: person.family_id,
      user_id: person.user_id,
      user_name: person.full_name,
      post_text: postText,
      created_at: `${Date.now()}`,
    };
    
    try {
      const res = await fetch(`${URL}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postObj),
      });
      const data = await res.json();
    } catch (error) {
      throw new Error(error);
    }
    
  }

  // const Router = useRouter();
  // const forceReload = () => {
  //   Router.reload()
  // }
  
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
      <button className={styles.postbutton} onClick={() => onSubmit(text)} >
        Post
      </button>
    </div>
  );
};


export default UserInput;
