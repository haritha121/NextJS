import { comments } from "@/data/comments";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(comments);
  } else if (req.method === "POST") {
    const comment = req.body.comment;
    const newComment = {
      id: Date.now(),
      text: comment,
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else if (req.method === "PATCH") {
    const commentVal = req.body.updateComment;
    const updateComment = comments.find((comment) => {
      if (comment.id === parseInt(commentVal.id)) {
        comment.text = commentVal.text;
      }
    });
    res.status(204).json(updateComment);
  }

  // if (req.method === "PATCH") {
  //   const { id, comment } = req.body;
  //   const index = comments.findIndex((comment) => comment.id === id);
  //   comments[index].text = comment;
  //   res.status(200).json(comments);
  // }
}
