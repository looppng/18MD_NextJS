import connectMongoDB from "../../../../libs/mongodb";
import Blog from "../../../../models/blog";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { title, content, tag } = await request.json();
  await connectMongoDB();
  await Blog.create({ title, content, tag });
  return NextResponse.json({ message: "blog created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  return NextResponse.json({ blogs });
}

// export async function DELETE() {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Blog.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
// }
