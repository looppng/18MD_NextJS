import connectMongoDB from "../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();

  const allTags = await Blog.distinct("tag");

  return NextResponse.json({ tags: allTags });
}
