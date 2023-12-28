import connectMongoDB from "../../../../../../libs/mongodb";
import Blog from "../../../../../../models/blog";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { tag } = params;
  await connectMongoDB();

  const blogsWithTag = await Blog.find({ tag });

  return NextResponse.json({ blogsWithTag });
}
