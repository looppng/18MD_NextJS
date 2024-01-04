import connectMongoDB from "../../../../../libs/mongo/mongodb";
import Blog from "../../../../../libs/models/Blog";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import Comment from "../../../../../libs/models/Comment";

type BlogUpdateType = {
  title: string;
  content: string;
  tag: string;
  image: string;
};

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

export async function DELETE(
  _request: NextRequest,
  { params }: { params: ParamsType },
) {
  try {
    const { id } = params;
    await connectMongoDB();

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

export async function PATCH(
  request: Request,
  { params, body }: { params: ParamsType; body: BlogUpdateType },
) {
  try {
    const { title, content, tag, image } = await request.json();
    const { id } = params;
    await connectMongoDB();
    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid blog ID" }, { status: 400 });
    }

    const updateObject = {
      title: title,
      content: content,
      tag: tag,
      image: image,
    };

    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: new ObjectId(id) },
      updateObject,
      { new: true }, // This option returns the modified document rather than the original
    );

    if (!updatedBlog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Blog updated", blog: updatedBlog },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
