import CreateBlogForm from "@/app/components/CreateBlogFrom/CreateBlogForm";
import React from "react";
import Link from "next/link";

const getTags = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs/tags", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tags");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tags: ", error);
  }
};

export type TagType = {
  _id: string;
  tag: string;
};

const CreateBlog = async () => {
  const tags = await getTags();

  return (
    <div>
      <Link href="/adminPanel">Admin Home</Link>
      <CreateBlogForm tags={tags} />
    </div>
  );
};

export default CreateBlog;
