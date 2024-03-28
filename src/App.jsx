import React from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';

import './App.css';

function App() {
  return (
    <div>
      <h1>Facebook!</h1>
        <CreatePostForm />
        <Feed />
    </div>
  )
}

export default App;