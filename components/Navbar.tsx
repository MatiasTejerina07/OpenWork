import { AppBar, Toolbar, IconButton } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { UiContext } from "@/context/ui";

export const Navbar = () => {

    const { openSideMenu } = useContext(UiContext)

    return (

        <AppBar position="sticky" elevation={0}>
            <Toolbar>
                <IconButton
                    size="small"
                    onClick={openSideMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Typography><span className="text-[26px]">O</span>penWork</Typography>
            </Toolbar>
        </AppBar>
    )
}
