import React, {useState} from 'react';

function CreatePostForm(props) {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  let handleUserChange = (event) => {
    setUser(event.target.value);
  }
  let handleContentChange = (event) => {
    setContent(event.target.value);
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    props.onNewSubmission({user, content});

    setUser("");
    setContent("");
  }

  return (
    <div className="post-form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleUserChange} value={user}></input>
        <br/>
        <textarea placeholder="Type your thoughts..." onChange={handleContentChange} value={content}></textarea>
        <br/>
        <button type="submit" disabled={user=="" || content==""}>Post</button>
      </form>
    </div>
  )
}

export default CreatePostForm;