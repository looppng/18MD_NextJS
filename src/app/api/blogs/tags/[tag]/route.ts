import connectMongoDB from "../../../../../../libs/mongodb";
import Blog from "../../../../../../models/blog";
import { NextResponse } from "next/server";

type ParamsType = {
  tag: string;
};

export async function GET(
  _request: Request,
  { params }: { params: ParamsType },
) {
  const { tag } = params;
  await connectMongoDB();

  const blogsWithTag = await Blog.find({ tag });

  return NextResponse.json({ blogsWithTag });
}
