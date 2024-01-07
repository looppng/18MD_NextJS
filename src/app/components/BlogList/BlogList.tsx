"use client";

import style from "./bloglist.module.css";
import Link from "next/link";

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
  _id: number;
  title: string;
  content: string;
  tag: string;
  image: string;
};

const BlogList = async () => {
  const { blogs } = await getBlogs();

  return (
    <>
      {blogs.map((blog: BlogType) => (
        <div key={blog._id} className={style.card}>
          <div className={style.imageSide}>
            <Link href={`/Blogs/${blog._id}`}>
              <img
                src={blog.image}
                alt="blogimg"
                className="img-thumbnail mb-3"
                width={600}
                height={300}
              />
            </Link>
          </div>
          <div className={style.cardSide}>
            <Link href={`/Blogs/${blog._id}`} className={style.link}>
              <h3 className={style.heading}>{blog.title}</h3>
              <p className={style.content}>{blog.content}</p>
            </Link>
            {blog.tag.split(",").map((tag: string, index: number) => (
              <Link key={index} href={`/Blogs/Tags/${tag.trim()}`}>
                <span className={style.pill}>{tag.trim()}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
      {blogs.length === 0 && <p>There are no available blogs...</p>}
    </>
  );
};

export default BlogList;
