import { useState, useEffect } from "react";
import Post from "./Post";

function Feed() {
  const [feed, setFeed] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await fetch(`https://ukla16.herokuapp.com/posts`);
        const data = await response.json();
        if (data.success === true) {
          setFeed(data.payload);
          console.log(feed)
          setError("");
        } else {
          setError("Fetch didn't work :(");
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      }
    }
    getPosts();
  }, []);
  

  if (error !== "") {
    return (
      <div>
        <p className="Show_error-text">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {feed.map((item) => {
        return (
          <Post
            key={item.id}
            username={item.user_name}
            postText={item.post_text}
            createdAt={item.created_at}
          />
        );
      })}
    </div>
  );
}

export default Feed;
