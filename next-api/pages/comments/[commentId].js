import { comments } from "@/data/comments";

function Comment({ comment }) {
  return (
    <>
      <h2>Comment details</h2>
      <p>
        {comment.id} {comment.text}
      </p>
    </>
  );
}
export default Comment;

export function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find((comment) => {
    return comment.id === parseInt(commentId);
  });
  return {
    props: {
      comment: comment,
    },
  };
}
