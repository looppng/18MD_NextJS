"use client";

import style from "./createform.module.css";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "@/app/components/Button/Button";

const CreateForm = ({ blogId }: { blogId: string }) => {
  const router = useRouter();

  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const submitComment = {
      blogId,
      comment,
      author,
    };

    const res = await fetch("http://localhost:3000/api/blogs/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitComment),
    });

    if (res.status === 201) {
      setAuthor("");
      setComment("");
      setIsLoading(false);

      router.push(`/Blogs/${blogId}`);
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
                <span>Author:</span>
              </label>
            </div>
            <div className="col-8">
              <input
                type="text"
                required
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                placeholder="John Doe"
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
                placeholder="Express yourself..."
                className={style.textarea}
              />
            </div>
            <div className="row">
              <div className="col-4 mt-3">
                <Button
                  text="Add Comment"
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

export default CreateForm;
