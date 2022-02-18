import { useState } from "react";

const UserInput = () => {
  const API_URL = "https://ukla16.herokuapp.com";
  const [text, setText] = useState("");
  console.log(text);

  async function onSubmit(postText) {
    const postObj = {
      familyID: 1,
      userID: 3,
      username: "Alan",
      postText: postText,
      createdAt: "2019-10-04T12:00:17.000Z",
    };

    const request = new Request(`${API_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postObj),
    });
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    alert("Post created")
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
