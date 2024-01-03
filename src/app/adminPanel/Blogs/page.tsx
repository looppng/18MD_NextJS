import React from "react";
import BlogListA from "@/app/components/AdminBlogs/BlogListA";
import style from "./page.module.css";

const BlogsA = () => {
  return (
    <main className="mb-5">
      <div className={style.blogsList}>
        <BlogListA />
      </div>
    </main>
  );
};

export default BlogsA;
