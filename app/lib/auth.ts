import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Usa una página personalizada o deja que NextAuth maneje la UI
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
export default handler;
