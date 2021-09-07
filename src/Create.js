import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(() => {
      // history.go(-1);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Post body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button>Add Post</button>
      </form>
    </div>
  );
}
 
export default Create;