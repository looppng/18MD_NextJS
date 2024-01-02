"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import style from "./SignInButton.module.css";
const SignInButton = () => {
  const { data: session } = useSession();

  return (
    <>
      {session ? (
        <button onClick={() => signOut()} className={style.button}>
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn()} className={style.button}>
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInButton;
