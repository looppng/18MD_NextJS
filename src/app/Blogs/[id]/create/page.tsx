import CreateForm from "@/app/Blogs/[id]/create/CreateForm";
import style from "./page.module.css";
const Page = () => {
  return (
    <main className={style.main}>
      <h2 className={style.heading}>Add new comment:</h2>
      <CreateForm />
    </main>
  );
};

export default Page;
