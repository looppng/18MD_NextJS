import connectMongoDB from "../../../../libs/mongo/mongodb";
import Blog from "../../../../libs/models/Blog";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";

type BlogUpdateType = {
  blogId: string;
  title: string;
  content: string;
  tag: string;
};

type ParamsType = {
  id: string;
};

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { title, content, tag, image } = await request.json();

  await connectMongoDB();

  await Blog.create({ title, content, tag, image });
  return NextResponse.json({ message: "blog created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find().sort({
    createdAt: -1,
  });
  return NextResponse.json({ blogs });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
}
