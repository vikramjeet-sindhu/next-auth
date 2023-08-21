import { useState, useEffect } from "react"
import { signIn, getSession } from "next-auth/react"


export default function Dashboard() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const securePage = async () => {
            const session = await getSession()
            if (!session) {
                signIn()
            } else {
                setLoading(false)
            }
        }
        securePage()
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    return <h1><br></br><br></br>Dashboard</h1>
}