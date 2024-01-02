import connectMongoDB from "../../../../../libs/mongo/mongodb";
import Blog from "../../../../../libs/models/blog";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import Comment from "../../../../../libs/models/Comment";

type ParamsType = {
  id: string;
};

export const dynamic = "force-dynamic";

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
