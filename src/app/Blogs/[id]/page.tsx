import style from "@/app/Blogs/bloglist.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import CreateForm from "@/app/Blogs/[id]/create/CreateForm";
import { BlogType } from "@/app/Blogs/BlogList";

type BlogDetailsProps = {
  _id: string;
  title: string;
  content: string;
  tag: string;
};

type CommentType = {
  _id: string;
  author: string;
  comment: string;
};

const getBlog = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    const Datas = await res.json();

    const { blog, comments } = Datas;
    return { blog: blog, comments: comments };
  } catch (error) {
    console.log("Error loading blog: ", error);
  }
};

const BlogDetails = async ({ params: { id } }: { params: { id: string } }) => {
  const blogInfo = await getBlog(id);

  if (!blogInfo) {
    return notFound();
  }

  return (
    <div className="mt-5">
      <main className={style.card}>
        <h3 className={style.heading}>{blogInfo.blog.title}</h3>
        <p className={style.content}>{blogInfo.blog.content}</p>
        <Link href={`/Blogs/Tags/${blogInfo.blog.tag}`}>
          <span className={style.pill}>{blogInfo.blog.tag}</span>
        </Link>
      </main>
      <div>
        <CreateForm blogId={id} />
      </div>
      {blogInfo.comments.map((com: CommentType) => (
        <div key={com._id} className={style.card}>
          <h3 className={style.heading}>{com.author}</h3>
          <p className={style.content}>{com.comment}</p>
        </div>
      ))}
      {blogInfo.comments.length === 0 && (
        <p>There are no available comments...</p>
      )}
    </div>
  );
};

export default BlogDetails;
