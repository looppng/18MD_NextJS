"use client";

import style from "../BlogList/bloglist.module.css";
import Link from "next/link";
import DeleteButton from "@/app/components/DeleteButton/DeleteButton";
import React from "react";

const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    return res.json();
  } catch (error) {
    console.log("Error loading blogs: ", error);
  }
};

export type BlogType = {
  _id: string;
  title: string;
  content: string;
  tag: string;
  image: string;
};

const BlogList = async () => {
  const { blogs, isLoading } = await getBlogs();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {blogs.map((blog: BlogType) => (
        <div key={blog._id} className={style.card}>
          <div className={style.imageSide}>
            <img
              src={blog.image}
              alt="blogimg"
              className="img-thumbnail mb-3"
              width={600}
              height={300}
            />
          </div>
          <div className={style.cardSide}>
            <Link href={`/adminPanel/Blogs/${blog._id}`} className={style.link}>
              <h3 className={style.heading}>{blog.title}</h3>
              <p className={style.content}>{blog.content}</p>
            </Link>
            {blog.tag.split(",").map((tag: string, index: number) => (
              <Link key={index} href={`/Blogs/Tags/${tag.trim()}`}>
                <span className={style.pill}>{tag.trim()}</span>
              </Link>
            ))}
            <div className={style.action}>
              <DeleteButton blogId={blog._id} />
              <button className="btn btn-warning">
                <Link
                  href={`/adminPanel/editBlog/${blog._id}`}
                  className={style.link}
                >
                  Edit
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
      {blogs.length === 0 && <p>There are no available blogs...</p>}
    </>
  );
};

export default BlogList;
