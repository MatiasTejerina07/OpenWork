import { List, Paper } from '@mui/material'
import React, { FC, useContext, useMemo, DragEvent } from 'react'
import { EntriesCard } from './EntriesCard'
import { EntryesStatus } from '@/interfaces'
import { EntriesContext } from '@/context/entries'


interface Props {
  status: EntryesStatus
}

export const EntryList: FC<Props> = ({ status }) => {

  const { entries } = useContext(EntriesContext)
  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])

  const onDrop = (event: DragEvent) => {
    const id = event.dataTransfer.getData('text')
  }
  const allowDrop = (event: DragEvent) => {
    event.preventDefault()
  }

  return (
    <div
      onDrop={onDrop}
      onDragOver={allowDrop}

    >
      <Paper sx={{
        height: 'calc(100vh - 250px)',
        backgroundColor: 'transparent'
      }}>

        <List sx={{ opacity: 1 }}>

          {
            entriesByStatus.map(entry => (

              <EntriesCard key={entry._id} entry={entry} />

            ))
          }
        </List>

      </Paper>

    </div>
  )
}
