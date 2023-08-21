import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
    const { data: session, status } = useSession()
    // console.log({ data: session, status })
    return (
        <nav>
            <ul >
                <li><Link className="active" href="/">Home</Link></li>
                {status == "authenticated" &&
                <li><Link href="/dashboard">Dashboard</Link></li>
    }
                <li><Link href="/blog">Blog</Link></li>
                {status == "unauthenticated" &&
                    <li><Link href="/api/auth/signin" onClick={(e) => {
                        e.preventDefault()
                        signIn('github')
                    }}>Sign In with Github</Link></li>
                }
                {status == "authenticated" &&
                    <li><Link href="#">Signed In as {session.user.email}</Link></li>
                }
                {status == "authenticated" &&
                    <li><Link href="/api/auth/signout" onClick={(e) => {
                        e.preventDefault()
                        signOut('github')
                    }}>Sign Out</Link></li>
                }
            </ul>
        </nav>
    )
}