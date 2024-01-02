import { DefaultSession } from "next-auth";
import { IUser } from "../libs/models/User";

declare module "next-auth" {
  export interface Session {
    user: IUser & DefaultSession["user"];
  }

  export interface User {
    id?: string;
    username: string;
    email: string;
    image?: string;
    createdAt: ?string;
    updatedAt?: string;
    isAdmin: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser & DefaultSession["user"];
  }
}
