import connectMongoDB from "../../../../../libs/mongo/mongodb";
import TagModel from "../../../../../libs/models/Tag";
import { NextResponse } from "next/server";
import Tag from "../../../../../libs/models/Tag";
import Blog from "../../../../../libs/models/Blog";

export async function GET() {
  await connectMongoDB();
  const tags = await Tag.find();
  return NextResponse.json(tags);
}

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { tag } = await request.json();
  await connectMongoDB();
  const createdTag = await TagModel.create({
    tag,
  });
  return NextResponse.json(
    { message: "Tag created", tag: createdTag },
    { status: 201 },
  );
}
