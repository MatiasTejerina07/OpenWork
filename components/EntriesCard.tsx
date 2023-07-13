import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC } from "react"


interface Props {
    entry: Entry
}


export const EntriesCard: FC<Props> = ({ entry }) => {
    return (

        <Card sx={{ marginBottom: 1 }}>

            <CardActionArea>

                <CardContent>

                    <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>

                </CardContent>

                <CardActions sx={{ display: "flex", justifyContent: 'end', paddingRight: 2, padding: '2px 10px' }}>

                    <Typography variant="body2">hace 30 minutos</Typography>

                </CardActions>


            </CardActionArea>

        </Card>
    )
}
