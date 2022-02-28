import { Grid, Paper } from '@mui/material';
import React from 'react';

export default function GoogleMap() {
  return <div>
            <Grid>
             <Grid sx={{padding:'15px'}}>
             <Paper elevation={10}>               
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8316.68202378137!2d16.1867151468159!3d58.59265195328398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x33a4c0a1680d8ebf!2zRGVsaSBCYXImS8O2aw!5e0!3m2!1sen!2sse!4v1643851126547!5m2!1sen!2sse" 
                width='100%' 
                height="200" 
                style={{border:0}} 
                allowFullScreen
                loading="lazy" 
                title="GoogleMap">
              </iframe>      
           </Paper>
           </Grid>
           </Grid>
         </div>;
}
