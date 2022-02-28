import React from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox'
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



export default function SignUp() {
  const classes = useStyles()

  const initialValues = {
    fullName:'',
    email: '',
    phoneNumber:'',
    password:'',
    confirmPassword:'',
    conditions: false
  }
  const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
    }, 2000)
  }
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Required!"),
    email: Yup.string().email('Please Enter Valid Email!').required("Required!"),
    phoneNumber: Yup.number().required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string().required("Required!"),
  })
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
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form>
            {console.log(props)}
              <Field as={TextField}
                  required
                  label="Full Name"
                  variant="standard"
                  type="text"
                  fullWidth
                  placeholder='Enter Your Name'
                  name='fullName'
                  helperText={<ErrorMessage name="fullName" />}
                />
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
                  label="Phone Number"
                  variant="standard"
                  type="number"
                  fullWidth
                  placeholder='Enter Your Phone Number'
                  name='phoneNumber'
                  helperText={<ErrorMessage name="phoneNumber" />}
                />
                <Field as={TextField}
                  required
                  label="Password"
                  variant="standard"
                  type="password"
                  fullWidth
                  name='password'
                  placeholder='Create a Password'
                  helperText={<ErrorMessage name="password" />}
                />
                <Field as={TextField}
                  required
                  label="Confirm Password"
                  variant="standard"
                  type="password"
                  fullWidth
                  placeholder='Confirm Passwpord'
                  name='confirmPassword'
                  helperText={<ErrorMessage name="confirmPassword" />}
                />
                <Field as={FormControlLabel} name='conditions' control={<Checkbox sx={{color: '#3b0f1c','&.Mui-checked': {color: '#3b0f1c',},}}/>} label="I accept the Conditions." />
                <Button disabled={props.isSubmitting} fullWidth type="submit" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c',color:'yellow' }} className={classes.btn}>
                      {props.isSubmitting ? "Loading" : "Sign Up"}
                </Button>
             </Form>
              )}
           </Formik>
          </Grid>          
          <Typography align='center' sx={{fontSize:'11px'}} paddingX={2}>Have Account? <Link className={classes.Link} href="/login"  underline='none'   sx={{ color: '#3b0f1c',fontWeight: 'bold', fontSize:'13px'}}>Sign In</Link></Typography>
      </Paper>
    </Grid>
  )
}
