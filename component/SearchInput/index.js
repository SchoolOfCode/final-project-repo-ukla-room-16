import { useState } from "react";

import styles from "../../styles/SearchInput.module.css";

const SearchInput = () => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [text, setText] = useState("");
  console.log(text);

  async function onSubmit(searchtext) {
   
    
  function handleChange(e) {
    setText(e.target.value);
    
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.textinput}
        type="text"
        onChange={handleChange}
        placeholder="Search"
      />
      <button className={styles.submitbutton} onClick={() => onSubmit(text)}>
        Search
      </button>
    </div>
  );
};
}

export default SearchInput
