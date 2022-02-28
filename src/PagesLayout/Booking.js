import React from 'react';
import BookingForm from '../Components/BookingForm';
import bgVedio from '../Images/vedio1.mp4'
import { Grid } from '@mui/material';


export default function Booking() {
  return    <Grid marginBottom={23} marginTop={21} sx={{minHeight: '70vh'}}>
             <video autoPlay loop muted  className='ved'>
                <source src={bgVedio} type="video/mp4" />
             </video> 
            
             <BookingForm />
            </Grid>
         }
