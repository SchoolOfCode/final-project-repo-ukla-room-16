import Image from "next/image";

import styles from "../../../styles/Post.module.css";
import profilePic from "../../../images/user-icon.jpeg"

function Post({ username, postText, createdAt }) {
  return (
    <div className={styles.container}>

    <div className={styles.postinfo}>
       <Image src={profilePic} width="80px" height="80px" />
      <p className={styles.username}>{username}</p>
      <p className={styles.timestamp}>{createdAt}</p>
    </div>
     

      <div className={styles.textbox}>
        <p>{postText}</p>
      </div>
    </div>
  );
}

export default Post;
