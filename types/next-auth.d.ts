import NextAuth, { DefaultSession } from "next-auth";
import { IUser } from "../models/User";

declare module "next-auth" {
  interface Session {
    user: IUser & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser & DefaultSession["user"];
  }
}
