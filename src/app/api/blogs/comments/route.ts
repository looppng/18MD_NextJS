import connectMongoDB from "../../../../../libs/mongo/mongodb";
import Comment from "../../../../../libs/models/Comment";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { blogId, comment, author } = await request.json();
  await connectMongoDB();
  await Comment.create({ blogId, comment, author });
  return NextResponse.json({ message: "comment created" }, { status: 201 });
}

export async function DELETE(request: Request) {
  try {
    const { _id } = await request.json();
    await connectMongoDB();

    if (!_id) {
      return NextResponse.json(
        { message: "Invalid comment ID" },
        { status: 400 },
      );
    }

    await Comment.findByIdAndDelete(_id);

    return NextResponse.json({ message: "comment Deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting comment:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
