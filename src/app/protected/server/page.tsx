import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const ServerProtectedPage = async () => {
  const session = await getServerSession(authOptions);

  console.log({ session });

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/protected/server");
  }

  return (
    <>
      <h1>Server protected page</h1>
      <p>Hi, {session.user?.username ?? "friend"}</p>
    </>
  );
};

export default ServerProtectedPage;
