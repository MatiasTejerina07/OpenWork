import { EntryList } from '@/components'
import LayoutUser from '@/layouts/LayoutUser'
import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import React, { FC } from 'react'



const HomePage: FC = () => {
  return (

    <LayoutUser title='OpenWork | Home'>

      <Grid container spacing={2}>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
            <CardContent>
              <EntryList />

            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En Progreso' />
            <CardContent>


            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <CardContent>


            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </LayoutUser>




  )
}

export default HomePage