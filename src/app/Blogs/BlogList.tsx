import style from "./bloglist.module.css";
import Link from "next/link";
const getBlogs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

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
};

const BlogList = async () => {
  const { blogs } = await getBlogs();

  return (
    <>
      {blogs.map((blog: BlogType) => (
        <div key={blog._id} className={style.card}>
          <Link href={`/Blogs/${blog._id}`} className={style.link}>
            <h3 className={style.heading}>{blog.title}</h3>
            <p className={style.content}>{blog.content}</p>
          </Link>
          <Link href={`/Blogs/Tags/${blog.tag}`}>
            <span className={style.pill}>{blog.tag}</span>
          </Link>
        </div>
      ))}
      {blogs.length === 0 && <p>There are no available blogs...</p>}
    </>
  );
};

export default BlogList;
