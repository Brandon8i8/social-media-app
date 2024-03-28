import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <div>
      <Post content="This is a test post"/>
      <Post content="Another test post"/>
    </div>
  )
}

export default Feed;