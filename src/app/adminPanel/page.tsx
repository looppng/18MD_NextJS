import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import style from "@/app/components/Navbar/navbar.module.css";

const adminPanel = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <div>Hi, {session?.user.username ?? "friend"}</div>
      <div>
        <h4>To view all blogs as admin:</h4>
        <Link href={"/adminPanel/Blogs"} className={style.link}>
          Blogs
        </Link>
        <h4>To create a blog as admin:</h4>
        <Link href={"/adminPanel/createBlog"} className={style.link}>
          Create
        </Link>
      </div>
    </div>
  );
};

export default adminPanel;
