import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { makeStyles } from '@material-ui/core'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/init-firebase';


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


export default function Login() {
  const classes = useStyles()

  const [formdata, setFormdata] = useState({
    email: '',
    password: '',
    remember: false
})
const [isSubmitting, setIsSubmitting] = useState(false)
const onSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true)
  const email = formdata.email
  const password = formdata.password
  signInWithEmailAndPassword(auth, email, password )
  .then((cred)=>{
    console.log('user Logged in:', cred.user)
  })
  .catch((err)=>{
    console.log(err.message)
  })
  e.target.reset();

}


  return (
    <Grid sx={{marginBottom:'40px',paddingY:'20px',overflow:'auto'}}>
      <Paper elevation={10} sx={{ minHeight: '70vh', width: 300, marginLeft: 'auto', marginTop: 10, marginRight: 'auto' }}>
        <Grid align='center' paddingTop={7} paddingX={3} >
          <Avatar sx={{ backgroundColor: '#3b0f1c' }}>
            <PunchClockIcon />
          </Avatar>
          <Typography variant='h6' component="h3" sx={{ fontWeight: 'bold'}}>Sign In</Typography>

               <form onSubmit={ onSubmit }>
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
                    label="Password"
                    variant="standard"
                    type="password"
                    fullWidth
                    placeholder='Enter Your Password'
                    name='password'
                    onChange={(e)=>setFormdata({ ...formdata, password: e.target.value })}
                  />
                 <FormControlLabel  name='remember' control={<Checkbox onChange={(e)=>setFormdata({ ...formdata, remember: !formdata.remember })} checked={formdata.remember} sx={{color: '#3b0f1c','&.Mui-checked': {color: '#3b0f1c',},}}/>} label="Remember me." />
                  <Button disabled={isSubmitting} fullWidth type="submit" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c',color:'yellow' }} className={classes.btn}>
                      {isSubmitting ? "Signing" : "Sign In"}
                </Button>
              
               </form>

          
        </Grid>
        <Typography align='center'  sx={{fontSize:'11px'}} marginTop={2} paddingX={2}>Forgot Password <Link className={classes.Link} underline='none' href="/reset-password" sx={{ color: '#3b0f1c',fontWeight: 'bold', fontSize:'13px'}}>Click Here</Link></Typography>
        <Typography  align='center' sx={{fontSize:'11px'}} paddingX={2}>Don't Have Account? <Link className={classes.Link} underline='none' href="/signup" sx={{ color: '#3b0f1c',fontWeight: 'bold', fontSize:'13px'}}>Sign Up</Link></Typography>
      </Paper>
    </Grid>
  )
}
