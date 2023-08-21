import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"

export default async (req, res) => {
  const session = await getServerSession(req, res, authOptions)
  if (session) {
    // Signed in
    res.status(200).json({message:"Success screen",session})
    console.log("Session", JSON.stringify(session, null, 2))
  } else {
    // Not Signed in
    res.status(401).json({message:"Success awaited",session})
  }
  res.end()
}