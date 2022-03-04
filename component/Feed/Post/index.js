import Image from "next/image";
import Link from "next/link";
import {useState} from 'react'

import styles from "../../../styles/Post.module.css";
import profilePic from "../../../images/user-icon.jpeg";
import heart from "../../../images/heart.png"
import like from "../../../images/like.png"


function Post({ username, postText, createdAt, picture, userID, id, likes, familyID, }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [count, setCount] = useState(likes )

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

  async function IncrementCount(count) {
    setCount(count+1)
    console.log(`${URL}/posts/${id}`)
    const res = await fetch(`${URL}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          likes: count+1
        }),
    })
    const data = await res.json()
    console.log(data)
  }

  async function deleteComment() {
    await fetch(`${URL}/posts/${id}`, {
      method: "DELETE",
    });
  }


  return (
    <div className={styles.container}>
      
      <div className={styles.postinfo}>
        <Link href={`/users?id=${userID}`}>
          <a>
            <Image
              src={picture ? picture : profilePic}
              width="60vh"
              height="60vh"
            />
          </a>
        </Link>
        <p className={styles.username}>{username}</p>
        <p className={styles.timestamp}>{timeAgo}</p>
        
      </div>

      <div className={styles.textbox}>
        <p>{postText}</p>
      </div>
      <div className={styles.postbutton}>
      <Image src={like} onClick={() => {IncrementCount(count)}} width="30vh" height="30vh" />
      <div className={styles.like}>
      <Image src={heart} width="30vh" height="30vh" />
      
      <p>{count}</p>
      <button className={styles.delete} onClick={deleteComment}>Delete</button>
      </div>
      </div>
      </div>
  );
}

export default Post;
