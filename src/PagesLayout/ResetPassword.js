import { Grid, Typography, TextField,Paper, } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
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
  })

export default function ResetPassword() {
    const classes = useStyles()
    const initialValues = {
        password:'',
        confirmNewPassword: '',
      }
    
    const onSubmit = (values, props) => {
      console.log(values)
      setTimeout(() => {
          props.resetForm()
          props.setSubmitting(false)
      }, 2000)
    }
    
    const validationSchema = Yup.object().shape({
        password: Yup.string().required("Required!"),
        confirmNewPassword: Yup.string().required("Required!"),

    })
  return <div>
            <Grid sx={{marginBottom:'40px',paddingTop:'20px'}}>
             <Paper elevation={10} sx={{ height: '70vh', width: 300, marginLeft: 'auto', marginTop: 10, marginRight: 'auto' }}>
              <Grid align='center' paddingTop={7} paddingX={3} >
                <Typography variant='h6' component='h6'>Reset Password</Typography>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props)=>(
                    <Form >
                        {console.log(props)}
                        <Field as={TextField}
                            required
                            label="New Password"
                            variant="standard"
                            type="password"
                            fullWidth
                            placeholder='Enter Your Password'
                            name='password'
                            helperText={<ErrorMessage name="password" />}
                        />
                        <Field as={TextField}
                            required
                            label="Confirm New Password"
                            variant="standard"
                            type="password"
                            fullWidth
                            placeholder='Enter Your Password'
                            name='confirmNewPassword'
                            helperText={<ErrorMessage name="confirmNewPassword" />}
                        />
                        <Button className={classes.btn} disabled={props.isSubmitting} fullWidth type="submit" color="primary" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c' }} >
                            {props.isSubmitting ? "Loading" : "Submit"}        
                        </Button>
                        </Form>
                    )}
                  </Formik>
                 </Grid> 
            </Paper>
        </Grid>          
       </div>;
}
