import { Grid } from '@mui/material'
import React,{ useContext } from 'react'
import { AppContext } from '../Contexts/Context'

export default function Profile() {
  const { menuitems }=useContext(AppContext)
  console.log(menuitems)
  return (
    <Grid id='profile' sx={{minHeight: '70vh',color:'#3b0f1c'}}>
        <h1>Here it will show about ticket activation, QR code</h1>
        <h2>{`Context check: ${menuitems[0].name}`}</h2>

    </Grid>
  )
}
