import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from 'react'

import styles from "../../../styles/Post.module.css";
import profilePic from "../../../images/user-icon.jpeg";
import heart from "../../../images/heart.png"
import like from "../../../images/like.png"
import bin from "../../../images/bin.png"

import { useUser } from "@auth0/nextjs-auth0";

function Post({ username, postText, createdAt, picture, userID, id, likes, familyID, image}) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [count, setCount] = useState(likes)
  const [person, setPerson] = useState("")
  const { user } = useUser();

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

  useEffect(() => {
    async function getUsers(personLoggingIn) {
      const res = await fetch(`${URL}/users`, {
        method: "GET",
      });
      const data = await res.json();
      const index = data.payload.findIndex((person) => {
        return person.email === personLoggingIn.email;
      });

      setPerson(data.payload[index]);
    }
    if (user) {
      getUsers(user);
    }
  }, [user]);


function checkImage () {

  if (image){

    return ( <Image src={image}    
    width="200"
    height="200"/> 
)
  }

  }






  return (
    <div className={styles.container}>
      
      <div className={styles.postinfo}>
        <Link href={`/users?id=${userID}`}>
          <a>
            <Image 
              src={picture ? picture : profilePic}
              width="60"
              height="60"
              className={styles.userPic}
            />
          </a>
        </Link>
        <p className={styles.username}>{username}</p>
        <p className={styles.timestamp}>{timeAgo}</p>
        
      </div>

      <div className={styles.textbox}>
        <p>{postText}</p>
      <div className={styles.images}>
        <a href = {image} target="_blank">{checkImage()}</a>
      </div>

      </div>
      <div className={styles.postbutton}>
      <Image src={like} onClick={() => {IncrementCount(count)}} width="30" height="30" />
      <div className={styles.like}>
      <Image src={heart} width="30" height="30" />
      
      <p>{count}</p>
      {person.id === userID ? <Image src={bin} width="30" height="30" onClick={deleteComment}/> : null}
      </div>
      </div>
      </div>
  );
}

export default Post;
