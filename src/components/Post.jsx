import React, { useState } from 'react';
import CommentFeed from './CommentFeed';

function Post(props) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div className="post-container">
      <h2>{props.user}</h2>
      <p>{props.content}</p>
      <h5>{Date()}</h5>

      <button onClick={handleLikes}>Like: {likes}</button>

      <h4>Comments:</h4>
      <CommentFeed />
    </div>
  )
}

export default Post;