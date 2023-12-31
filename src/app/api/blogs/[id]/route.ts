import connectMongoDB from "../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import Comment from "../../../../../models/Comment";

type ParamsType = {
  id: string;
};

export async function GET(
  _request: Request,
  { params }: { params: ParamsType },
) {
  const { id } = params;
  await connectMongoDB();

  const objectId = new ObjectId(id);

  const blog = await Blog.findOne({ _id: objectId });
  const comments = await Comment.find({ blogId: objectId }).sort({
    createdAt: -1,
  });

  return NextResponse.json({ blog, comments }, { status: 200 });
}
