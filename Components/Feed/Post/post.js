function Post({ username, postText, createdAt }) {
  return (
    <div>
      {username}
      <br></br>
      {postText}
      <br></br>
      {createdAt}
    </div>
  );
}

export default Post;
