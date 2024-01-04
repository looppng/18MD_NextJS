import React from "react";
import BlogListA from "@/app/components/AdminBlogs/BlogListA";
import style from "./page.module.css";
import Link from "next/link";

const BlogsA = () => {
  return (
    <main className="mb-5">
      <Link href={"/adminPanel"} className={style.navLink}>
        <h5 className="mt-4">Back to Admin Home</h5>
      </Link>
      <div className={style.blogsList}>
        <BlogListA />
      </div>
    </main>
  );
};

export default BlogsA;
