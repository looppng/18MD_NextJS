import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { hash } from "bcrypt";
import UserModel from "../../../../models/User";
import connectMongoDB from "../../../../libs/mongodb";

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      message: "You are not authorized to view this page",
    });
  }

  return NextResponse.json({
    message: "Hello",
  });
}

export async function POST() {
  try {
    await connectMongoDB()

  }
}
