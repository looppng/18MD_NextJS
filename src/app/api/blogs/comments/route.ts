import connectMongoDB from "../../../../../libs/mongodb";
import Comment from "../../../../../models/Comment";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { blogId, comment, author } = await request.json();
  await connectMongoDB();
  await Comment.create({ blogId, comment, author });
  return NextResponse.json({ message: "comment created" }, { status: 201 });
}
