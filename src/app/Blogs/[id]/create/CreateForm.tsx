"use client";

import style from "./createform.module.css";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateForm = () => {
  const router = useRouter();

  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [tag, setTag] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const submitComment = {
      author,
      comment,
      tag,
    };

    const res = await fetch(`http://localhost:3002/blogs/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitComment),
    });

    if (res.status === 201) {
      router.refresh();
      router.push("/blogs");
    }
  };

  return (
    <div className={style.wrapper}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className="row">
          <div className="col-12">
            <div className="col-4">
              <label className={style.label}>
                <span>Author:</span>
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                required
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                className={style.input}
              />
            </div>
            <div className="col-4">
              <label className={style.label}>
                <span>Comment:</span>
              </label>
            </div>
            <div className="col-8">
              <textarea
                required
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                className={style.textarea}
              />
            </div>
            <div className="col-4">
              <label className={style.label}>
                <span>Tag:</span>
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                required
                onChange={(e) => setTag(e.target.value)}
                value={tag}
                className={style.input}
              />
            </div>
            <div className="row">
              <div className="col-4 mt-3">
                <button className="btn btn-primary" disabled={isLoading}>
                  {isLoading && <span>Adding...</span>}
                  {!isLoading && <span>Add Comment</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
