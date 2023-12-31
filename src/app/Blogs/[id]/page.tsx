import style from "./page.module.css";
import { notFound } from "next/navigation";
import Link from "next/link";
import CreateForm from "@/app/components/CreateForm/CreateForm";
import Image from "next/image";

type CommentType = {
  _id: string;
  author: string;
  comment: string;
  createdAt: string;
};

const getBlog = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
      cache: "no-store",
    });

    const Datas = await res.json();

    const { blog, comments } = Datas;
    return { blog, comments };
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
        <Image
          src={blogInfo.blog.image}
          alt="blogimg"
          className="img-thumbnail mb-3"
          width={400}
          height={200}
        />
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
        <div key={com._id} className={style.comcard}>
          <h3 className={style.author}>{com.author}</h3>
          <p className={style.comment}>{com.comment}</p>
          <p>{new Date(com.createdAt).toLocaleString()}</p>
        </div>
      ))}
      {blogInfo.comments.length === 0 && (
        <p className={style.noComment}>
          There are no comments yet , you can be the first...
        </p>
      )}
    </div>
  );
};

export default BlogDetails;
