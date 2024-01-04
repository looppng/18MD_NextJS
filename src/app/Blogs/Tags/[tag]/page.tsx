import style from "./page.module.css";
import { notFound } from "next/navigation";

type TagProps = {
  _id: string;
  title: string;
  content: string;
  tag: string;
};

const getTag = async (tag: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/tags/${tag}`, {
      cache: "no-store",
    });

    const data = await res.json();
    const { blogsWithTag } = data;
    return blogsWithTag;
  } catch (error) {
    console.log("Error loading blog: ", error);
  }
};

const TagBlogs = async ({ params: { tag } }: { params: { tag: string } }) => {
  const tags = await getTag(tag);
  if (!tags) {
    return notFound();
  }

  return (
    <div className={style.container}>
      {tags.map((tag: TagProps) => (
        <main key={tag._id} className={style.card}>
          <h3 className={style.heading}>{tag.title}</h3>
          <p className={style.content}>{tag.content}</p>
          <span className={style.pill}>{tag.tag}</span>
        </main>
      ))}
    </div>
  );
};

export default TagBlogs;
