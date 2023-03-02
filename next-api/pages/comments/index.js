import { useState } from "react";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");
  const fetchComments = async () => {
    const response = await fetch("/api/comments");
    const data = await response.json();
    setComments(data);
  };
  const handleSubmitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ userComment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Response from POST reaquest", data);
  };
  return (
    <>
      <input
        type="text"
        value={userComment}
        onChange={(e) => setUserComment(e.target.value)}
      />
      <button onClick={handleSubmitComment}>Submit Comment</button>
      <button onClick={fetchComments}>Load comments</button>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            {comment.id} {comment.text}
          </div>
        );
      })}
    </>
  );
}
export default CommentsPage;
