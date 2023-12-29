import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { hash } from "bcrypt";
import UserModel from "../../../../models/User";
import connectMongoDB from "../../../../libs/mongodb";

export async function GET() {
  return NextResponse.json({
    message: "Hello",
  });
}
