import { Entry } from "@/interfaces"
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material"
import { FC, DragEvent } from "react"


interface Props {
    entry: Entry
}


export const EntriesCard: FC<Props> = ({ entry }) => {

    const onDragStart = (event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id)
    }
    const onDragEnd = () => {
        //terminar el drag
    }


    return (

        <Card
            sx={{ marginBottom: 1 }}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
        >

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
