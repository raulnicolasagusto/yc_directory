import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

const handler = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
        }),
    ],
})

export { handler as GET, handler as POST }