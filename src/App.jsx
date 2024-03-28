import React, {useState} from 'react';
import CreatePostForm from './components/CreatePostForm';
import Feed from './components/Feed';
import './App.css';

function App() {
  const [feed, setFeed] = useState([]);
  let handleNewSubmission = (data) => {
    setFeed([...feed, data]);
  }

  return (
    <div>
      <h1>Facebook!</h1>
        <CreatePostForm onNewSubmission={handleNewSubmission}/>
        <Feed posts={feed}/>
    </div>
  )
}

export default App;