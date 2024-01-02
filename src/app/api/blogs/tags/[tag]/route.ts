import connectMongoDB from "../../../../../../libs/mongo/mongodb";
import Blog from "../../../../../../libs/models/blog";
import { NextResponse } from "next/server";
import TagModel from "../../../../../../libs/models/Tag";

type ParamsType = {
  tag: string;
};

export const dynamic = "force-dynamic";

export async function GET(
  _request: Request,
  { params }: { params: ParamsType },
) {
  const { tag } = params;
  await connectMongoDB();

  const tagDocument = await TagModel.findOne({ tag });

  const blogsWithTag = await Blog.find({ tag: tagDocument.tag });

  return NextResponse.json({ blogsWithTag });
}
