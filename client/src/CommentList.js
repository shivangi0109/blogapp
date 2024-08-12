import { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchData = async () => {
    const result =  await axios.get(`http://localhost:4001/posts/${postId}/comments`);

    setComments(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return (
      <li key={comment.id}>
        {comment.content}
      </li>
    );
  });

  return (
    <ul>
      {renderedComments}
    </ul>
  );
};

export default CommentList;