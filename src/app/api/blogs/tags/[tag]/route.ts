import connectMongoDB from "../../../../../../libs/mongo/mongodb";
import { NextResponse } from "next/server";
import TagModel from "../../../../../../libs/models/Tag";
import BlogModel from "../../../../../../libs/models/Blog";

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

  try {
    const tagDocument = await TagModel.findOne({ tag });

    if (!tagDocument) {
      return NextResponse.json({ message: "Tag not found" }, { status: 404 });
    }

    const blogsWithTag = await BlogModel.find({
      tag: { $regex: tagDocument.tag, $options: "i" },
    });

    return NextResponse.json({ blogsWithTag });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
