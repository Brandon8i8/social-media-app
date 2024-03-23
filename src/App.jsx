import React from 'react';
import Post from './components/Post';

function App() {
  return (
    <div>
      <h1>Facebook!</h1>

        {/* CreatePostForm */}

        {/* Feed */}

        <Post content="This is a test post!"/>
        <br/>
        <Post content="This is another test post!"/>

    </div>
  )
}

export default App;