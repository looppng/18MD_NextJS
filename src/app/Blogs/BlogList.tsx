import style from "./bloglist.module.css";
import Link from "next/link";
const getBlogs = async () => {
  const res = await fetch("http://localhost:3002/blogs", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const blogs = data.results;
  return blogs;
};

export type blogType = {
  id: number;
  title: string;
  content: string;
  tag: string;
};

const BlogList = async () => {
  const blogs: [] = await getBlogs();

  return (
    <>
      {blogs.map((blog: blogType) => (
        <div key={blog.id} className={style.card}>
          <Link href={`/Blogs/${blog.id}`} className={style.link}>
            <h3 className={style.heading}>{blog.title}</h3>
            <p className={style.content}>{blog.content}</p>
          </Link>
          <span className={style.pill}>{blog.tag}</span>
        </div>
      ))}
      {blogs.length === 0 && <p>There are no available blogs...</p>}
    </>
  );
};

export default BlogList;
