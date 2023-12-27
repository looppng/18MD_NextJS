import connectMongoDB from "../../../../../libs/mongodb";
import Blog from "../../../../../models/blog";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();

  const objectId = new ObjectId(id);

  const blog = await Blog.findOne({ _id: objectId });

  return NextResponse.json({ blog }, { status: 200 });
}
