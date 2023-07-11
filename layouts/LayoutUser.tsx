import Nabvar from "@/components/Navbar"
import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const LayoutUser: FC<Props> = () => {
    return (
        <>

            <Nabvar />

        </>
    )
}

export default LayoutUser