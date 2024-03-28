import React, { useState } from 'react';
import Comment from './Comment';

function Post(props) {
  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div className="post-container">
      <h2>{props.user}</h2>
      <p>{props.content}</p>
      <h5>{props.date}</h5>

      <button onClick={handleLikes}>Like: {likes}</button>

      <h4>Comments:</h4>
      <Comment content="This is the test comment!"/>
      <Comment content="This is another test comment!"/>
      <Comment content="This is yet another test comment!"/>
    </div>
  )
}

export default Post;