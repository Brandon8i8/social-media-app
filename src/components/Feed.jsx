import React from 'react';
import Post from './Post';

function Feed() {
  return (
    <div>
      <Post user="Brandon" content="This is a test post" date="03/28/2024"/>
      <Post content="Another test post"/>
    </div>
  )
}

export default Feed;