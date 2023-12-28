import style from "@/app/Blogs/bloglist.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import CreateForm from "@/app/Blogs/[id]/create/CreateForm";

type BlogDetailsProps = {
  _id: string;
  title: string;
  content: string;
  tag: string;
};

const getBlog = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    const blogData = await res.json();
    const { blog } = blogData;
    return blog;
  } catch (error) {
    console.log("Error loading blog: ", error);
  }
};

const BlogDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const blog = await getBlog(id);

  if (!blog) {
    return notFound();
  }

  return (
    <div className="mt-5">
      <main className={style.card}>
        <h3 className={style.heading}>{blog.title}</h3>
        <p className={style.content}>{blog.content}</p>
        <Link href={`/Blogs/Tags/${blog.tag}`}>
          <span className={style.pill}>{blog.tag}</span>
        </Link>
      </main>
      <div>
        <CreateForm />
      </div>
    </div>
  );
};

export default BlogDetails;
