import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { makeStyles } from '@material-ui/core'

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

  const initialValues = {
    email: '',
    password: '',
    remember: false
}

const onSubmit = (values, props) => {
  console.log(values)
  setTimeout(() => {
      props.resetForm()
      props.setSubmitting(false)
  }, 2000)
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Please Enter Valid Email!').required("Required!"),
  password: Yup.string().required("Required!")
})
  return (
    <Grid sx={{marginBottom:'40px',paddingY:'20px',overflow:'auto'}}>
      <Paper elevation={10} sx={{ minHeight: '70vh', width: 300, marginLeft: 'auto', marginTop: 10, marginRight: 'auto' }}>
        <Grid align='center' paddingTop={7} paddingX={3} >
          <Avatar sx={{ backgroundColor: '#3b0f1c' }}>
            <PunchClockIcon />
          </Avatar>
          <Typography variant='h6' component="h3" sx={{ fontWeight: 'bold'}}>Sign In</Typography>
           <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
             {(props)=>(
               <Form >
                  {console.log(props)}
                  <Field as={TextField}
                    required                    
                    label="Email"
                    variant="standard"
                    type="email"
                    fullWidth
                    placeholder='Enter Your Email'
                    name='email'
                    helperText={<ErrorMessage name="email" />}
                    
                  />
                  <Field as={TextField}
                    required
                    label="Password"
                    variant="standard"
                    type="password"
                    fullWidth
                    placeholder='Enter Your Password'
                    name='password'
                    helperText={<ErrorMessage name="password" />}
                  />
                  <Field as={FormControlLabel} name='remember' control={<Checkbox sx={{color: '#3b0f1c','&.Mui-checked': {color: '#3b0f1c',},}}/>} label="Remember Me" />
                  <Button disabled={props.isSubmitting} fullWidth type="submit" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c',color:'yellow' }} className={classes.btn}>
                    {props.isSubmitting ? "Loading" : "Sign In"}
                  </Button>
              
               </Form>
             )}
           </Formik>
          
        </Grid>
        <Typography align='center'  sx={{fontSize:'11px'}} marginTop={2} paddingX={2}>Forgot Password <Link className={classes.Link} underline='none' href="/reset-password" sx={{ color: '#3b0f1c',fontWeight: 'bold', fontSize:'13px'}}>Click Here</Link></Typography>
        <Typography  align='center' sx={{fontSize:'11px'}} paddingX={2}>Don't Have Account? <Link className={classes.Link} underline='none' href="/signup" sx={{ color: '#3b0f1c',fontWeight: 'bold', fontSize:'13px'}}>Sign Up</Link></Typography>
      </Paper>
    </Grid>
  )
}
