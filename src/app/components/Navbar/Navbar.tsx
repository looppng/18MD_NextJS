import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";
import SignInButton from "@/app/components/SignInButton/SignInButton";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.image}>
        <Link href="/">
          <Image
            src={Logo}
            alt="page logo"
            width={50}
            height={50}
            quality={100}
          />
        </Link>
      </div>
      <Link href="/" className={style.link}>
        Home
      </Link>
      <Link href={"/Blogs"} className={style.link}>
        Blogs
      </Link>
      <div className={style.action}>
        <SignInButton />
      </div>
    </nav>
  );
};

export default Navbar;
