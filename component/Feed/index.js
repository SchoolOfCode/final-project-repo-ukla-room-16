import { useState, useEffect } from "react";
import Post from "./Post";
import styles from "../../styles/Feed.module.css";

function Feed({ person, feed, setFeed }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const [error, setError] = useState("");
  let familyID = person.family_id;

  useEffect(() => {
    async function getPosts(familyID) {
      //FETCHING THE POSTS
      const res = await fetch(`${URL}/posts?familyID=${familyID}`);
      const data = await res.json();
      console.log(data);
      setFeed(
        data.payload.sort((a, b) => {
          return b.created_at - a.created_at;
        })
      );
      console.log(feed);
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
            id={item.id}
            userID={item.user_id}
            likes={item.likes}
            familyID={familyID}
            image={item.post_image}
            feed={feed}
            setFeed={setFeed}
          />
        );
      })}
    </div>
  );
}

export default Feed;
