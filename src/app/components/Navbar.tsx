import Link from "next/link";
import style from "./navbar.module.css";
import Image from "next/image";
import Logo from "./logo.svg";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.image}>
        <Image
          src={Logo}
          alt="page logo"
          width={50}
          height={50}
          quality={100}
        />
        <h3 className={style.logo}>Logo</h3>
      </div>

      <Link href="/" className={style.link}>
        Home
      </Link>
      <Link href={"/Blogs"} className={style.link}>
        Blogs
      </Link>
    </nav>
  );
};

export default Navbar;
