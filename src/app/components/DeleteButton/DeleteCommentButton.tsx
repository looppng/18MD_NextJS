import React from "react";
import { useRouter } from "next/navigation";

type DeleteType = {
  _id?: string;
};

const DeleteCommentButton = ({ _id }: DeleteType) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/blogs/comments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ _id }),
      });

      if (res.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete comment", res);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">
      Delete
    </button>
  );
};

export default DeleteCommentButton;
