import { FC, ReactNode } from "react"
import { Navbar, Sidebar } from "@/components"

interface Props {
    children: ReactNode
}

const LayoutUser: FC<Props> = () => {
    return (
        <>

            <Navbar />
            <Sidebar />

        </>
    )
}

export default LayoutUser