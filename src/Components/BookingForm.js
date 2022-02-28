import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import { Avatar, Paper, TextField, Typography } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Checkbox from '@mui/material/Checkbox'
import MaterialUIPickers from './DateTimePicker';
import { makeStyles } from '@material-ui/core'

 const useStyles = makeStyles({
  btn: {
     '&:hover': {
      background: '#a82a4f', 
      color:'yellow'       
    },
  },
  Link:{
    '&:hover': {
      background: '#a82a4f', 
      color:'red',       
    },
  },
}) 


export default function BookingForm() {

  const [formdata, setFormdata] = useState({
    fullName:'',
    email: '',
    phoneNumber: '',
    numberOfPerson:'',
    dateTime:new Date().toString().substring(0, 34),
    note:'',
    conditions: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const classes = useStyles()

      const onSubmit = (e) => {
        setIsSubmitting(true)
        e.preventDefault()
        console.log(formdata)
        setTimeout(() => {
            console.log()
            setIsSubmitting(false)
        }, 5000)
      }

   const addDate = (date) =>{
       setFormdata({ ...formdata, dateTime: date })
    }


  return (
    <Grid sx={{color:'#3b0f1c'}} >
     <Paper elevation={10} sx={{ height: 'auto', width: 300, marginX: 'auto', marginTop: 10, paddingBottom:2, }}>
     <Grid align='center' paddingTop={3} paddingX={3} >
          <Avatar sx={{ backgroundColor: '#3b0f1c' }}>
            <AddCircleOutlineIcon />
          </Avatar>
          <Typography variant='h6' component="h3" sx={{ fontWeight: 'bold', paddingBottom:'10px'}}>Book a Table</Typography>
          </Grid>
          <Grid  paddingX={3} >         

       <form onSubmit={onSubmit}>
        <TextField
                  required
                  label="Full Name"
                  variant='outlined'
                  type="text"
                  fullWidth
                  placeholder='Enter Your Name'
                  name='fullName'
                  sx={{paddingBottom:'5px'}}
                  value={formdata.fullName}
                  onChange={(e)=>setFormdata({ ...formdata, fullName: e.target.value })}

          />
          <TextField
                  required
                  label="Email"
                  variant='outlined'
                  type="email"
                  fullWidth
                  placeholder='Enter Your Email'
                  name='email'
                  sx={{paddingBottom:'5px'}}
                  value={formdata.email}
                  onChange={(e)=>setFormdata({ ...formdata, email: e.target.value })}
          />

          <TextField
                  required
                  label="Phone Number"
                  variant='outlined'
                  type="number"
                  fullWidth
                  placeholder='Enter Your Phone Number'
                  name='phoneNumber'
                  sx={{paddingBottom:'5px'}}
                  value={formdata.phoneNumber}
                  onChange={(e)=>setFormdata({ ...formdata, phoneNumber: e.target.value })}
          />
            <TextField
                  fullWidth
                  required
                  sx={{marginBottom:3}}
                  label="Number Of Person"
                  variant='outlined'
                  name='numberOfPerson'
                  type="number"
                  placeholder='Enter Number of person'
                  value={formdata.numberOfPerson}
                  onChange={(e)=>setFormdata({ ...formdata, numberOfPerson: e.target.value })}

           />


           <MaterialUIPickers  formdata={formdata} addDate={addDate}/>

          <TextField
              sx={{paddingBottom:'5px',marginY:1}}
              label="Note"
              defaultValue=""
              variant="outlined"
              multiline
              type="text"
              fullWidth
              placeholder='Any specific requirements'
              name='note'
              value={formdata.note}
              onChange={(e)=>setFormdata({ ...formdata, note: e.target.value })}

          />
                <FormControlLabel  name='conditions' control={<Checkbox onChange={(e)=>setFormdata({ ...formdata, conditions: !formdata.conditions })} checked={formdata.conditions} sx={{color: '#3b0f1c','&.Mui-checked': {color: '#3b0f1c',},}}/>} label="I accept the Conditions." />
                <Button disabled={isSubmitting} fullWidth type="submit" variant="contained" sx={{ margin: '8px 0', backgroundColor: '#3b0f1c',color:'yellow' }} className={classes.btn}>
                      {isSubmitting ? "Loading" : "Submit"}
                </Button>
             </form>

 
         </Grid>
      </Paper>
    </Grid>
  )
}