import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@material-ui/core'
import { auth } from '../utils/init-firebase'
import {
  createUserWithEmailAndPassword
} from 'firebase/auth'

const useStyles = makeStyles({
  btn: {
     '&:hover': {
      background: '#a82a4f', 
      color:'white'       
    },
  },
  Link:{
    '&:hover': {
      background: '#a82a4f', 
      color:'yellow',       
    },
  },
})



export default function SignUp() {
  const classes = useStyles()

  const [formdata, setFormdata] = useState({
    fullName:'',
    email: '',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    conditions: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (e) => {
    setIsSubmitting(true)
    e.preventDefault();
    const email = formdata.email
    const password = formdata.password
    createUserWithEmailAndPassword(auth, email, password )
    .then(cred => {
      console.log('user created:', cred.user)
    })

    .catch(err => {
      console.log(err.message)
    })
    .then(()=>{
      setTimeout(() => {
        setIsSubmitting(false)
    }, 3000)
    })
    e.target.reset();
  console.log(formdata)
}



  return (
    <Grid sx={{color:'#3b0f1c',marginBottom:'40px',paddingTop:'20px'}}>
     <Paper elevation={10} sx={{ minHeight: '70vh', width: 300, marginX: 'auto', marginTop: 10, paddingBottom:2 }}>
     <Grid align='center' paddingTop={3} paddingX={3}>
          <Avatar sx={{ backgroundColor: '#3b0f1c' }}>
            <AddCircleOutlineIcon />
          </Avatar>
          <Typography variant='h6' component="h3" sx={{ fontWeight: 'bold'}}>Sign Up</Typography>
          </Grid>

          <Grid  paddingX={3}>
            <form onSubmit={ onSubmit }>
              <TextField
                  required
                  label="Full Name"
                  variant="standard"
                  type="text"
                  fullWidth
                  placeholder='Enter Your Name'
                  name='fullName'
                  onChange={(e)=>setFormdata({ ...formdata, fullName: e.target.value })}
                />
                <TextField
                  required
                  label="Email"
                  variant="standard"
                  type="email"
                  fullWidth
                  placeholder='Enter Your Email'
                  name='email'
                  onChange={(e)=>setFormdata({ ...formdata, email: e.target.value })}
                />
              
              <TextField
                  required
                  label="Phone Number"
                  variant="standard"
                  type="number"
                  fullWidth
                  placeholder='Enter Your Phone Number'
                  name='phoneNumber'
                  onChange={(e)=>setFormdata({ ...formdata, phoneNumber: e.target.value })}
                />
                <TextField
                  required
                  label="Password"
                  variant="standard"
                  type="password"
                  fullWidth
                  name='password'
                  placeholder='Create a Password'
                  onChange={(e)=>setFormdata({ ...formdata, password: e.target.value })}
                />
                <TextField
                  required
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  fullWidth
                  placeholder='Confirm Passwpord'
                  name='confirmPassword'
                  onChange={(e)=>setFormdata({ ...formdata, confirmPassword: e.target.value })}
                />
                <FormControlLabel  name='conditions' control={<Checkbox onChange={(e)=>setFormdata({ ...formdata, conditions: !formdata.conditions })} checked={formdata.conditions} sx={{color: '#3b0f1c','&.Mui-checked': {color: '#3b0f1c',},}}/>} label="I accept the Conditions." />
                <Button disabled={isSubmitting} fullWidth type="submit" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c',color:'yellow' }} className={classes.btn}>
                      {isSubmitting ? "Signing up" : "Sign Up"}
                </Button>
             </form>
          </Grid>          
          <Typography align='center' sx={{fontSize:'11px'}} paddingX={2}>Have Account? <Link className={classes.Link} href="/login"  underline='none'   sx={{ color: '#3b0f1c',fontWeight: 'bold', fontSize:'13px'}}>Sign In</Link></Typography>
      </Paper>
    </Grid>
  )
}
