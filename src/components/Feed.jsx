import React from 'react';
import Post from './Post';

function Feed(props) {
  let renderPosts = () => {
    return (props.posts.map((data) => {
      return <Post user={data.user} content={data.content} date={data.date} />
    }))
  }
  return (
    <div>{renderPosts()}</div>
  )
}

export default Feed;