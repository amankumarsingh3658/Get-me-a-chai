import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const authoptions = NextAuth({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            httpOptions: {
                timeout: 10000
            }
        }),
    ],
})

export { authoptions as GET, authoptions as POST }