import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./mngdb.ts"

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

    ],
    database: process.env.MONGODB_URL,
    session: {
        jwt: true,
    },
    jwt: {
        secret: 'qwertyytrewq'
    },
    callbacks: {
        async session({ session, user }) {
            session.user.id = user.id;
            return session
          },
    }
})