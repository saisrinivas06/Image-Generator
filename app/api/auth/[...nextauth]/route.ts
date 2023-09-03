import NextAuth, { type NextAuthOptions } from "next-auth"
import { prisma } from "@/prisma/db"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "'",
    }),
  ],
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
