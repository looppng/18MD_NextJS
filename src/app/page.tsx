import Link from "next/link";
import Button from "@/app/components/Button/Button";
import Image from "next/image";
import travel from "../../public/travel.jpg";
export default function Home() {
  return (
    <main>
      <div>
        <h2 className="heading mb-3 text-center fs-3">
          Welcome to my blogs website
        </h2>
        <Image
          src={travel}
          alt="blog"
          width={600}
          height={400}
          className="rounded mx-auto d-block mt-5"
        />
        <div className="action">
          <Link href={"/Blogs"}>
            <Button text="View Blogs" />
          </Link>
        </div>
      </div>

      <div className="mb-5">
        <h2 className="heading text-center mb-5">Updates from bloggers</h2>
        <div className="row">
          <p className="paragraph col-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aliquid at cum dolor ea iste libero maiores molestias
            nam nulla, perferendis quibusdam, quis quod quos ratione rem
            reprehenderit repudiandae sed sunt totam. Distinctio eum excepturi
            facilis incidunt, iusto nihil quod velit. Animi assumenda delectus
            deserunt dolorem doloremque obcaecati, possimus tenetur.
          </p>
          <p className="paragraph col-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aliquid at cum dolor ea iste libero maiores molestias
            nam nulla, perferendis quibusdam, quis quod quos ratione rem
            reprehenderit repudiandae sed sunt totam. Distinctio eum excepturi
            facilis incidunt, iusto nihil quod velit. Animi assumenda delectus
            deserunt dolorem doloremque obcaecati, possimus tenetur.
          </p>
          <p className="paragraph col-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium, aliquid at cum dolor ea iste libero maiores molestias
            nam nulla, perferendis quibusdam, quis quod quos ratione rem
            reprehenderit repudiandae sed sunt totam. Distinctio eum excepturi
            facilis incidunt, iusto nihil quod velit. Animi assumenda delectus
            deserunt dolorem doloremque obcaecati, possimus tenetur.
          </p>
        </div>
      </div>
    </main>
  );
}
