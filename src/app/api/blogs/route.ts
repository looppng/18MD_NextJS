import connectMongoDB from "../../../../libs/mongo/mongodb";
import Blog from "../../../../libs/models/Blog";
import { NextRequest, NextResponse } from "next/server";
import TagModel from "../../../../libs/models/Tag";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
  const { title, content, tag, image } = await request.json();

  await connectMongoDB();

  const tags = tag.split(",").map((tg: string) => tg.trim());

  try {
    const existingTags = await TagModel.find({ tag: { $in: tags } });

    const existingTagNames = existingTags.map((existingTag) => existingTag.tag);

    const newTags = tags.filter((tg) => !existingTagNames.includes(tg));

    for (const tg of newTags) {
      await TagModel.create({ tag: tg });
    }

    await Blog.create({ title, content, tag, image });

    return NextResponse.json({ message: "Blog created" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find().sort({
    createdAt: -1,
  });
  return NextResponse.json({ blogs });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Blog.findByIdAndDelete(id);
  return NextResponse.json({ message: "Blog Deleted" }, { status: 200 });
}
