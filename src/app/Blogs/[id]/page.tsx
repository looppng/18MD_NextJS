import style from "@/app/Blogs/bloglist.module.css";
import { notFound } from "next/navigation";

type BlogDetailsProps = {
  id: number;
  title: string;
  content: string;
  tag: string;
};

export const dynamicParams = false;
// export const generateStaticParams = async () => {
//   const res = await fetch("http://localhost:3002/Blogs");
//
//   const blogs: [] = await res.json();
//
//   return blogs.map((blog: BlogDetailsProps) => ({
//     id: blog.id,
//   }));
// };

const getBlog = async (id: number) => {
  const res = await fetch("http://localhost:3002/Blogs/" + id, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    notFound();
  }

  const data: BlogDetailsProps = await res.json();
  return data;
};

const BlogDetails = async ({ params }: { params: { id: number } }) => {
  const blog = await getBlog(params.id);

  return (
    <main className={style.card}>
      <nav>
        <h2>Blog Details :</h2>
      </nav>
      <h3 className={style.heading}>{blog.title}</h3>
      <p className={style.content}>{blog.content}</p>
      <span className={style.pill}>{blog.tag}</span>
    </main>
  );
};
export default BlogDetails;
