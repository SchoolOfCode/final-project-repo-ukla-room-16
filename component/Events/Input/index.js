// import React (to use jsx)

// input component (function Input)
// add to list function taken in as prop
// has text input
// keeps value in state
// has button
// on click calls add to list function
// export default Input

import React, { useState } from "react";

import styles from "../../../styles/Events.module.css"

function Input({ addToList }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleClick();
    }
  }

  function handleClick() {
    addToList(text);
    setText("");
  }
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      {/* <Button onClick={handleClick}>+</Button> */}
    </div>
  );
}

export default Input;
