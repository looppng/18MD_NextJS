"use client";

import style from "./EditBlogForm.module.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "@/app/components/Button/Button";
import { TagType } from "@/app/adminPanel/createBlog/page";

const EditForm = ({ blogInfo, tags }: { blogInfo: any,  tags: any}) => {
  const router = useRouter();

  const [title, setTitle] = useState(blogInfo.blog.title);
  const [content, setContent] = useState(blogInfo.blog.content);
  const [isLoading, setIsLoading] = useState(false);
  const [tag, setTag] = useState(blogInfo.blog.tag);
  const [blogId, setBlogId] = useState(blogInfo.blog._id);
  const [image, setImage] = useState(blogInfo.blog.image);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const submitBlog = {
      title,
      content,
      tag,
      image,
    };

    const res = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json-patch+json" },
      body: JSON.stringify(submitBlog),
    });

    if (res.status === 201) {
      setTitle("");
      setContent("");
      setTag("");

      setIsLoading(false);

      router.push(`/Blogs`);
      router.refresh();
    } else {
      setIsLoading(false);
    }
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className="row">
          <div className="col-10">
            <div className="col-4">
              <label className={style.label}>
                <span>Title:</span>
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={style.input}
              />
            </div>
            <div className="col-4">
              <label className={style.label}>
                <span>Content:</span>
              </label>
            </div>
            <div className="col-8">
              <textarea
                required
                onChange={(e) => setContent(e.target.value)}
                value={content}
                className={style.textarea}
              />
            </div>
            <div className="col-4">
              <label className={style.label}>
                <span>Tag:</span>
              </label>
            </div>
            <div className="col-8">
              <select
                className={style.select}
                required
                onChange={(e) => setTag(e.target.value)}
                name="tag"
                value={tag}
              >
                {tags.map((t: TagType) => (
                  <option key={t._id} value={t.tag}>
                    {t.tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-4">
              <label className={style.label}>
                <span>Image Url:</span>
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                className={style.input}
              />
            </div>
            <div className="row">
              <div className="col-4 mt-3">
                <Button
                  text="Save"
                  type={"submit"}
                  disabled={isLoading}
                  onSubmit={() => handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
