"use client";

import React from "react";
import Link from "next/link";
import EditBlogForm from "@/app/components/EditBlogForm/EditBlogForm";

const getBlog = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${_id}`, {
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

const EditBlog = async () => {
  const tags = await getTags();

  return (
    <div>
      <Link href="/adminPanel">Admin Home</Link>
      <EditBlogForm tags={tags} />
    </div>
  );
};

export default EditBlog;
