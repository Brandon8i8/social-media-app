import React, {useState} from 'react';

function CreatePostForm() {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("mm/dd/yyyy");

  let handleUserChange = (event) => {
    setUser(event.target.value);
  }
  let handleContentChange = (event) => {
    setContent(event.target.value);
  }
  let handleDateChange = (event) => {
    setDate(event.target.value);
  }

  let handleSubmit = (event) => {
    setUser("");
    setContent("");
    setDate("mm/dd/yyyy");
  }

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" onChange={handleUserChange} value={user}></input>
        <br/>
        <textarea placeholder="Type your thoughts..." onChange={handleContentChange} value={content}></textarea>
        <br/>
        <input type="date" onChange={handleDateChange} value={date}></input>
        <button type="submit" disabled={user=="" || content=="" || date=="mm/dd/yyyy"}>Post</button>
      </form>
    </div>
  )
}

export default CreatePostForm;