import React, {useState} from 'react';
import CreatePostForm from './CreatePostForm';
import Feed from './Feed';

function CommentFeed() {
  const [commentFeed, setCommentFeed] = useState([]);
  let handleNewSubmission = (data) => {
    setCommentFeed([...commentFeed, data]);
  }

  return (
    <div>
      <CreatePostForm onNewSubmission={handleNewSubmission}/>
      <Feed posts={commentFeed}/>
    </div>
  )
}

export default CommentFeed;