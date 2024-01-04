import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";
import style from "@/app/components/Navbar/navbar.module.css";

const adminPanel = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h3 className={style.header}>Hi, {session?.user.username ?? "friend"}</h3>
      <nav className={style.nav}>
        <Link href={"/adminPanel/Blogs"} className={style.navLink}>
          All Blogs and their comments
        </Link>
        <Link href={"/adminPanel/createBlog"} className={style.navLink}>
          Create a new blog
        </Link>
      </nav>
    </div>
  );
};

export default adminPanel;
