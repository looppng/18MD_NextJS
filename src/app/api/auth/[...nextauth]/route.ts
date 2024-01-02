import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextApiHandler } from "next";
import { loginUser } from "../../../../../libs/services/auth";
import { IUser } from "../../../../../libs/models/User";

interface CredentialsType {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as CredentialsType;
        // const user = { id: "1", name: "J Smith", email: "" };

        const user = await loginUser({ email, password });

        // if (email !== "jsmith@example.com" || password !== "password") {
        //   throw Error("Invalid credentials");

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  // pages: {
  //   signIn: "/signin",
  // },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },

    async session({ session, token }) {
      if (token.user) {
        session.user = {
          ...token.user,
          password: undefined,
        };
      }

      return session;
    },
  },
};

const handler: NextApiHandler = NextAuth(authOptions);

export { handler as GET, handler as POST };
