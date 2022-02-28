import { Grid } from '@mui/material'
import React from 'react'
import { Avatar, Typography } from '@mui/material';
import DeliFooterLogo from '../Images/DeliFooterLogo.png'
import {Link} from 'react-router-dom'
import SocialLink from './SocialLink';


export default function Footer() {
  return (
    <Grid container className='footer' spacing={2}>
        <Grid id='footer-img' item>
                <a href='/'><Avatar alt="DeliLogo" src={DeliFooterLogo} variant="square" sx={{ width: 100, height: 50}} /> </a>
        </Grid>           
            <Grid container xs={12} spacing={1} paddingX={16} >
                <Grid item xs={12} lg={3}><Link to="/"><Typography textAlign="center" color={'yellow'}>Home</Typography></Link></Grid>
                <Grid item xs={12} lg={3}><Link to="/menu"><Typography textAlign="center" color={'yellow'}>Menu</Typography></Link></Grid>
                <Grid item xs={12} lg={3}><Link to="/booking"><Typography textAlign="center" color={'yellow'}>Booking</Typography></Link></Grid>
                <Grid item xs={12} lg={3}><Link to="/contact"><Typography textAlign="center" color={'yellow'}>Contact</Typography></Link></Grid>
             </Grid>
             <SocialLink />
       <Grid xs={12} lg={12} item color={'white'} margin={2}>
               @2022 Powered by: LBH
       </Grid>
       
     </Grid>
  )
}
