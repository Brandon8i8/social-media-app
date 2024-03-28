import React from 'react';

function CreatePostForm() {

  return (
    <div>
      <h2>Create Post</h2>
      <form>
        <input type="text" placeholder="Name"></input>
        <br/>
        <textarea placeholder="Type your thoughts..."></textarea>
        <br/>
        <input type="date"></input>
        <button type="submit">Post</button>
      </form>
    </div>
  )
}

export default CreatePostForm;