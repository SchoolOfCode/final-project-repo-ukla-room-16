import { useState, useEffect } from "react";
import Post from "./Post";
import styles from "../../styles/Feed.module.css";
import { useUser } from "@auth0/nextjs-auth0";

function Feed({ person }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState("");
  let familyID = person.family_id;

  // useEffect(() => {
  //   async function getPosts() {
  //     try {
  //       const response = await fetch(`${URL}/posts`);
  //       const data = await response.json();
  //       if (data.success === true) {
  //         setFeed(data.payload.sort((a,b) => {
  //           return b.created_at - a.created_at
  //         }));
  //         setError("");
  //       } else {
  //         setError("Fetch didn't work :(");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //       setError(err.message);
  //     }
  //   }
  //   getPosts();
  // }, []);

  useEffect(() => {
    async function getPosts(familyID) {
      //FETCHING THE FAMILIES TABLE
      const res = await fetch(`${URL}/posts?familyID=${familyID}`, {
        method: "GET",
      });
      console.log(`URL = ${URL}/posts?familyID=${familyID}`);
      const data = await res.json();
      console.log("correct data ");
      console.log(data);
      setFeed(
        data.payload.sort((a, b) => {
          return b.created_at - a.created_at;
        })
      );
    }

    if (familyID) {
      getPosts(familyID);
    }
  }, [familyID]);

  if (error !== "") {
    return (
      <div>
        <p className="Show_error-text">{error}</p>
      </div>
    );
  }
  return (
    <div className={styles.feed}>
      {feed.map((item) => {
        return (
          <Post
            key={item.id}
            username={item.user_name}
            postText={item.post_text}
            createdAt={item.created_at}
            picture={item.picture}
            id = {item.id}
            userID={item.user_id}
          />
        );
      })}
    </div>
  );
}

export default Feed;