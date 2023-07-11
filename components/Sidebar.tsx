import { ListItem } from "@material-tailwind/react"
import { Box, Divider, Drawer, List, ListItemIcon, Typography } from "@mui/material"
import { HomeOutlined, AccountCircle, EmailOutlined } from '@mui/icons-material';
import { FC, ReactNode, useContext } from "react";
import { UiContext } from "@/context/ui";

interface Props {
    Pag: string,
    Icon: ReactNode
}
const MenuItems: Props[] = [
    { Pag: 'Inicio', Icon: <HomeOutlined /> },
    { Pag: 'User', Icon: <AccountCircle /> },
    { Pag: 'Email', Icon: <EmailOutlined /> }
]

export const Sidebar: FC = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UiContext)

    return (


        <Drawer
            anchor="left"
            open={sidemenuOpen}
            onClose={closeSideMenu}
        >

            <Box width={250}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>
                <List>
                    {
                        MenuItems.map((text: Props, index) => (
                            <ListItem key={text.Pag}>
                                <ListItemIcon key={index}>
                                    {text.Icon}
                                    {text.Pag}
                                </ListItemIcon>

                            </ListItem>

                        ))
                    }
                </List>
            </Box>
            <Divider />
        </Drawer>
    )
}
