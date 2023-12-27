import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mt-3">
      <h2>404 Not Found</h2>
      <p>There is no page that you are looking for</p>
      <p>
        If you want to go back to <Link href="/">Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
