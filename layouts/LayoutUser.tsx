import { FC, ReactNode } from "react"
import { Navbar, Sidebar } from "@/components"
import Head from "next/head"

interface Props {
    children: ReactNode,
    title?: string
}

const LayoutUser: FC<Props> = ({ title = 'OpenWork', children }) => {
    return (
        <>
            <Head>

                <title>

                    {title}

                </title>

            </Head>

            <Navbar />

            {children}

            <Sidebar />
        </>
    )
}

export default LayoutUser