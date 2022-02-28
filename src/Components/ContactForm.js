import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
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



export default function ContactForm() {
  const classes = useStyles()
  const initialValues = {
    fullName:'',
    email: '',
    message:'',
    
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
    message: Yup.string().required("Required!"),
    
  })
  return (
    <Box sx={{ width: '100%', paddingY:10, paddingX:2, marginBottom:13 }}>
      <Typography variant="h4" textAlign={'center'}  component="h4">Contact</Typography>
      <Typography variant="body2" textAlign={'center'} marginBottom={2} component="p" paddingX={5}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget nunc consequat, finibus eros nec, volutpat risus. Cras at pretium arcu. Praesent quis molestie risus. Pellentesque id tellus nec est placerat pretium vitae nec massa.</Typography>
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent:'center'}}>
        <Grid item xs={12} md={4} >
          <Paper  elevation={24} sx={{ padding:2, }}>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props)=>(
            <Form>
            {console.log(props)}
             <Box sx={{maxWidth: '100%', margin:3, }} >
                <Field as={TextField}
                  required
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  fullWidth
                  name='fullName'
                  helperText={<ErrorMessage name="fullName" />}
                  placeholder='Enter Your Name' 
                  />
             </Box>                           
             <Box sx={{maxWidth: '100%', margin:3, }} > 
             <Field as={TextField}
                  required
                  label="Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  placeholder='Enter Your Email'
                  name='email'
                  helperText={<ErrorMessage name="email" />}
                />
             </Box>
             <Box sx={{maxWidth: '100%', margin:3, }} > 
               <Field as={TextField}
                  minRows={4} 
                  required
                  fullWidth 
                  label="Message" 
                  name='message'
                  placeholder="Enter Your Message" 
                  multiline />
             </Box>
             <Box sx={{maxWidth: '100%', margin:3,}} > 
                <Button disabled={props.isSubmitting} fullWidth type="submit" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c',color:'yellow' }} className={classes.btn}>
                      {props.isSubmitting ? "Sending" : "Send"}
                </Button>
             </Box>
             </Form>
              )}
           </Formik>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
        
        <Grid  sx={{ paddingY:10, paddingX:4 }}>
                <Grid sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                    <Typography variant="h6" ><LocationOnIcon/></Typography>
                    <Grid textAlign={'center'}>
                        <Typography variant="h6" >Trädgårdsgatan 3</Typography>
                        <Typography variant="body2">602 24 Norrköping</Typography>
                    </Grid>
                </Grid>
                <Grid sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                    <Typography variant="h6"><CallRoundedIcon/></Typography>
                    <Typography variant="h6">0738758985</Typography>
                
                </Grid>
                <Grid sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                    <Typography variant="h6"><MarkunreadRoundedIcon/></Typography>
                    <Typography variant="h6">deli@delibarkok.se</Typography>
                
                </Grid>
                
        </Grid>
                
        </Grid> 
        
              
        
      </Grid>
    </Box>
  );
}
