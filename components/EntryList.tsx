import { List, Paper } from '@mui/material'
import React from 'react'
import { EntriesCard } from './EntriesCard'

export const EntryList = () => {
  return (


    <div>
      <Paper sx={{
        height: 'calc(100vh - 250px)',
        backgroundColor: 'transparent'
      }}>

        <List sx={{ opacity: 1 }}>
          <EntriesCard />
        </List>

      </Paper>

    </div>
  )
}
