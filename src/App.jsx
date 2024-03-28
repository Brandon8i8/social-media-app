import React from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';

import './App.css';

function App() {
  return (
    <div>
      <h1>Facebook!</h1>

        {/* CreatePostForm */}
        <CreatePostForm />

        {/* Feed */}

        <Post content="This is a test post!"/>
        <br/>
        <Post content="This is another test post!"/>

    </div>
  )
}

export default App;