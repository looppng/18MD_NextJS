import React from "react";
import { useRouter } from "next/navigation";

type DeleteType = {
  blogId?: string;
};

const DeleteButton = ({ blogId }: DeleteType) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete blog");
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
