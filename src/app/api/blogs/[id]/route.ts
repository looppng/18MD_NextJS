import connectMongoDB from "../../../../../libs/mongo/mongodb";
import Blog from "../../../../../libs/models/Blog";
import { NextRequest, NextResponse } from "next/server";
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

// export async function PUT(
//   request: Request,
//   { params }: { params: NewParamsType },
// ) {
//   const { id } = params;
//   const {
//     newTitle: title,
//     newContent: content,
//     newTag: tag,
//   } = await request.json();
//
//   await connectMongoDB();
//   await Blog.findOneAndUpdate(id, { title, content, tag });
//   return NextResponse.json({ message: "Topic updated" }, { status: 200 });
// }

export async function DELETE(
  _request: NextRequest,
  { params }: { params: ParamsType },
) {
  try {
    const { id } = params;
    await connectMongoDB();
    new ObjectId(id);

    if (!id) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
