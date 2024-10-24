import { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title
    });

    setTitle('');
  };

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} className="form-control" onChange={handleChange} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;