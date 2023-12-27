import NextAuth, { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Login logic here, find user from db

        if (email !== "admin@admin.com" && password !== "admin") {
          return null;
        }

        return { id: "123", name: "John Doe", email: "admin@admin.com" };
      },
    }),
  ],
};

export default NextAuth(authOptions);
