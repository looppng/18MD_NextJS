import CreateBlogForm from "@/app/components/CreateBlogFrom/CreateBlogForm";
import style from "@/app/components/Navbar/navbar.module.css";
import React from "react";
import Link from "next/link";

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

export type TagType = {
  _id: string;
  tag: string;
};

const CreateBlog = async () => {
  const tags = await getTags();

  return (
    <div>
      <CreateBlogForm tags={tags} />
      <Link href={"/adminPanel"} className={style.navLink}>
        <h5 className="mt-4">Back to Admin Home</h5>
      </Link>
    </div>
  );
};

export default CreateBlog;
