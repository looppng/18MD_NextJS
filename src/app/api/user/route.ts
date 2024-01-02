import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { hash } from "bcrypt";
import UserModel from "../../../../libs/models/User";
import connectMongoDB from "../../../../libs/mongo/mongodb";

export async function GET(_request: Request) {
  await connectMongoDB();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({
      message: "You are not authorized to view this page",
    });
  }
  return NextResponse.json({ message: "User Created" }, { status: 201 });
}

export async function POST(_request: Request) {
  try {
    await connectMongoDB();

    const passwordHash = await hash("password", 10);

    const adminUser = await UserModel.create({
      username: "admin",
      password: passwordHash,
      email: "admin@test.com",
    });

    return NextResponse.json({
      message: "User created successfully",
      adminUser,
    });
  } catch (err) {
    const { message } = err as Error;

    return NextResponse.json({ message }, { status: 500 });
  }
}
