import { Grid } from '@mui/material'
import { onAuthStateChanged } from 'firebase/auth'
import React,{ useContext, useEffect,useState } from 'react'
import { AppContext } from '../Contexts/Context'
import { auth } from '../utils/init-firebase'

export default function Profile() {
  const [currentUser, setCurrentUser]=useState(null)
  const { menuitems }=useContext(AppContext)
  console.log(menuitems)

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, user=>{
        setCurrentUser(user)
    })
    return ()=>{
        unsubscribe()
    }
},[])
  return (
    <Grid id='profile' sx={{minHeight: '70vh',color:'#3b0f1c'}}>
        <h1>Here it will show about ticket activation, QR code</h1>
        <h2>{`Context check: ${menuitems[0].name}`}</h2>
        <p>{JSON.stringify(currentUser, null, 2)}</p>

    </Grid>
  )
}
