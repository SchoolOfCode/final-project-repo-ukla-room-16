import Image from "next/image";

import styles from "../../../styles/Post.module.css";
import profilePic from "../../../images/user-icon.jpeg";
import {useState, useEffect} from 'react'

function Post({ username, postText, createdAt, picture}) {
  let currentTime = Date.now();
  let timedistance = currentTime - createdAt;
  let timeAgo;
  if (timedistance < 60000) {
    timeAgo = `${Math.floor(timedistance / 1000)} seconds ago`;
  } else if (timedistance < 3.6e6) {
    timeAgo = `${Math.floor(timedistance / 60000)} minutes ago`;
  } else if (timedistance < 8.64e7) {
    timeAgo = `${Math.floor(timedistance / 3.6e6)} hours ago`;
  } else if (timedistance < 6.048e8) {
    timeAgo = `${Math.floor(timedistance / 8.64e7)} days ago`;
  } else if (timedistance < 2.628e9) {
    timeAgo = `${Math.floor(timedistance / 6.048e8)} weeks ago`;
  } else if (timedistance < 3.154e10) {
    timeAgo = `${Math.floor(timedistance / 2.628e9)} months ago`;
  } else {
    timeAgo = `${Math.floor(timedistance / 3.154e10)} years ago`;
  }

  return (
    <div className={styles.container}>
      <div className={styles.postinfo}>
        <Image src={picture ? picture:profilePic} width="60vh" height="60vh" />
        <p className={styles.username}>{username}</p>
        <p className={styles.timestamp}>{timeAgo}</p>
      </div>

      <div className={styles.textbox}>
        <p>{postText}</p>
      </div>
    </div>
  );
}

export default Post;