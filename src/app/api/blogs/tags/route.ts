import connectMongoDB from "../../../../../libs/mongo/mongodb";
import TagModel from "../../../../../libs/models/Tag";
import { NextResponse } from "next/server";
import Tag from "../../../../../libs/models/Tag";

export async function GET() {
  await connectMongoDB();

  const allTags = await Tag.distinct("tag");

  return NextResponse.json({ tags: allTags });
}

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { tag } = await request.json();
  await connectMongoDB();
  const createdTag = await TagModel.create({
    tag,
  });
  return NextResponse.json(
    { message: "tag created", tag: createdTag },
    { status: 201 },
  );
}
