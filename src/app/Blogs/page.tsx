import React from "react";
import BlogList from "@/app/components/BlogList/BlogList";
import style from "./page.module.css";

const Blogs = () => {
  return (
    <main className="mb-5">
      <h2 className={style.heading}>Look at all the blogs</h2>
      <p className={style.paragraph}>
        Here you can see all the newest blogs in the site
      </p>
      <div className={style.blogs}>
        <BlogList />
      </div>
    </main>
  );
};

export default Blogs;
