import { NextPage } from "next";
import style from "./signin.module.css";

interface Props {}

const LoginPage: NextPage = (props) => {
  return (
    <div className={style.signInForm}>
      <form className={style.form}>
        <h3 className={style.heading}>Login</h3>
        <input
          type="email"
          placeholder="johndoe@email.com"
          className={style.input}
        />
        <input type="password" placeholder="********" className={style.input} />
        <input type="submit" value="Login" className={style.input} />
      </form>
    </div>
  );
};

export default LoginPage;
