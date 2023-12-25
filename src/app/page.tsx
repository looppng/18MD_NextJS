import style from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div>
        <h2 className={style.heading}>Welcome to my blogs website</h2>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
        <div className={style.action}>
          <Link href={"/Blogs"}>
            <button className="btn btn-primary">View Blogs</button>
          </Link>
        </div>
      </div>

      <div>
        <h2 className={style.heading}>Updates from bloggers</h2>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
        <p className={style.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
      </div>
    </main>
  );
}
