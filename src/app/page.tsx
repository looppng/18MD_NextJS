import Link from "next/link";
import Button from "@/app/components/Button";
export default function Home() {
  return (
    <main>
      <div>
        <h2 className="heading">Welcome to my blogs website</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
        <div className="action">
          <Link href={"/Blogs"}>
            <Button text="View Blogs" />
          </Link>
        </div>
      </div>

      <div>
        <h2 className="heading">Updates from bloggers</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium,
          aliquid at cum dolor ea iste libero maiores molestias nam nulla,
          perferendis quibusdam, quis quod quos ratione rem reprehenderit
          repudiandae sed sunt totam. Distinctio eum excepturi facilis incidunt,
          iusto nihil quod velit. Animi assumenda delectus deserunt dolorem
          doloremque obcaecati, possimus tenetur.
        </p>
        <p className="paragraph">
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
