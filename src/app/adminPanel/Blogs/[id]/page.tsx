"use client";

import style from "./page.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import DeleteCommentButton from "@/app/components/DeleteButton/DeleteCommentButton";
import React from "react";

type CommentType = {
  _id: string;
  author: string;
  comment: string;
  createdAt: string;
};

const getBlog = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    const Data = await res.json();

    const { blog, comments } = Data;
    return { blog, comments };
  } catch (error) {
    console.error("Error loading blog: ", error);
    throw error;
  }
};

const BlogDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const blogInfo = await getBlog(id);

  if (!blogInfo) {
    return notFound();
  }

  return (
    <div className="mt-5">
      <main className={style.card}>
        <div className={style.imageSide}>
          <Link href={`/Blogs/${blogInfo.blog._id}`}>
            <img
              src={blogInfo.blog.image}
              alt="blogimg"
              className="img-thumbnail mb-3"
              width={600}
              height={300}
            />
          </Link>
        </div>
        <h3 className={style.heading}>{blogInfo.blog.title}</h3>
        <p className={style.content}>{blogInfo.blog.content}</p>
        {blogInfo.blog.tag.split(",").map((tag: string, index: number) => (
          <Link key={index} href={`/Blogs/Tags/${tag.trim()}`}>
            <span className={style.pill}>{tag.trim()}</span>
          </Link>
        ))}
      </main>
      {blogInfo.comments.map((com: CommentType) => (
        <div key={com._id} className={style.comcard}>
          <h3 className={style.author}>{com.author}</h3>
          <p className={style.comment}>{com.comment}</p>
          <p>{new Date(com.createdAt).toLocaleString()}</p>
          <DeleteCommentButton _id={com._id} />
        </div>
      ))}
      {blogInfo.comments.length === 0 && (
        <p className={style.noComment}>
          There are no comments yet , you can be the first...
        </p>
      )}
    </div>
  );
};

export default BlogDetails;
