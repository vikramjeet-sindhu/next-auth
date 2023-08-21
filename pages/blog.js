import { getSession, useSession } from "next-auth/react"


export default function Blog({ data }) {
    const session = useSession()
    return <h1><br></br><br></br>Blog - {data}</h1>
}

export async function getServerSideProps(vishwas) {
    const session = await getSession(vishwas)

    if (!session) {
        return {
            redirect: {
                destination: process.env.BLOG,
                permanent: false,
            },
        }
    }

    return {
        props: {
            session,
            data: session ? 'List of 100 Personalized Posts' : 'List of Free Posts',
        },
    }

}