"use client";

import React from "react";
import Link from "next/link";
import EditBlogForm from "@/app/components/EditBlogForm/EditBlogForm";

const getBlog = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    const Datas = await res.json();

    const { blog } = Datas;
    return { blog };
  } catch (error) {
    console.log("Error loading blog: ", error);
  }
};

const getTags = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs/tags", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Error loading tags: ", error);
  }
};

const EditBlog = async ({ params: { id } }: { params: { id: string } }) => {
  const tags = await getTags();
  const blogInfo = await getBlog(id);

  return (
    <div>
      <Link href={"/adminPanel"}>Admin Home</Link>
      <EditBlogForm blogInfo={blogInfo} tags={tags} />
    </div>
  );
};

export default EditBlog;
