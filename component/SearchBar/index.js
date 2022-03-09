import React, { useState } from "react";
import Image from "next/image";

import styles from "../../styles/SearchBar.module.css";
import searchIcon from "../../images/search-icon.svg";

export default function SearchBar({ feed, setFeed }) {
  const [text, setText] = useState();

  function onChange(e) {
    setText(e.target.value);
  }

  function searchPosts() {
    console.log(text);
    setFeed(
      feed.filter((post) => {
        return post.user_name === text.toLowerCase();
      })
    );
  }

  function enterPress(e) {
    if (e.keyCode == 13) document.querySelector(".searchbutton").click();
  }

  return (
    <div className={styles.searchcontainer}>
      <input
        type="text"
        className={styles.searchinput}
        placeholder="Search"
        onChange={onChange}
        // onkeydown={enterPress}
      />
      <button className={styles.searchbutton} onClick={searchPosts}>
        <Image src={searchIcon} width="30" height="30" />
      </button>
    </div>
  );
}
