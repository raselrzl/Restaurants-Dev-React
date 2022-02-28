import React from 'react'
import { Grid, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function SocialLink() {
  return (
    <div>
             <Grid xs={12} lg={12} item sx={{ display: 'flex', justifyContent:'center', alignItems:'center',alignContent:'center'}}>
                <a href="https://www.facebook.com/" 	target='__blank'><Typography variant="h6" marginX={2}><FacebookIcon  sx={{ fontSize: 40, color:'yellow' }}/></Typography></a>
                <a href="https://www.instagram.com/" 	target='__blank'><Typography variant="h6" marginX={2}><InstagramIcon sx={{ fontSize: 40, color:'yellow'}}/></Typography></a>
            </Grid>
    </div>
  )
}
