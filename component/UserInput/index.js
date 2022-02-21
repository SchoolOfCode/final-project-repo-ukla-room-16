import { useState } from "react";

const UserInput = () => {
  const API_URL = "https://ukla16.herokuapp.com";
  const [text, setText] = useState("");
  console.log(text);

  async function onSubmit(postText) {
    const postObj = {
      family_id: 1,
      user_id: 3,
      user_name: "Alan",
      post_text: postText,
      created_at: "2019-10-04T11:00:17.000Z",
    };

    const res = await fetch(`${API_URL}/posts`, {
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
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => onSubmit(text)}>Submit</button>
    </div>
  );
};

export default UserInput;
