import { Grid, Typography, Paper } from '@mui/material';
import React from 'react';
import Carousel from '../Components/Carousel';
import GoogleMap from '../Components/GoogleMap';
import LinearProgress from '@mui/material/LinearProgress';
import Skeleton from '@mui/material/Skeleton';
import { useAuth } from '../Contexts/AuthContext';


export default function Home() {
     const {currentUser}= useAuth()
     
      
  return <div >
               <Grid sx={{height:'300px',Width:'100%', marginTop:'60px', opacity:'.7'}} id='homepage-image'>
                        <a className='HopageButton' href={"/Booking"}><Typography variant='body'>RESERVATION</Typography></a>
                        <a className='HopageButton' href={"/Menu"}><Typography variant='body'>MENU</Typography></a>                       
                        
               </Grid>
              
               
                
                
                <Grid  sx={{display:'grid', justifyContent:'center'}}>
                <Paper sx={{ padding:2, margin:2 }}>
                  <Typography align={'center'} variant={'h6'} component={'h6'} margin={'20px'} >
                        Välkomna till  Deli Bar&Kök!
                    </Typography>
                  
                  <Typography align={'center'} variant={'body2'} component={'h6'} marginBottom={'20px'} paddingX={3}>
                        För oss går mat, dryck ,shot och sist men inte 
                        minst musik hand i hand med vårt koncept att kunna tillfredställa våra gäster på 
                        bästa sätt och skapa ett magiskt ställe för folk att umgås och ha kul oavsett dag i veckan. 
                        Med en rik historia i Norrköpings krogliv skapar vi nya minnen tillsammans med er.
                  </Typography>
                  <p>{`the current user is: ${currentUser}`}</p>
                  {console.log(currentUser)}
                  </Paper>
                
               </Grid>
               <Grid container sx={{display:'flex', justifyContent:'center', alignItems: 'center'}}>
                   <Grid item xs={12} lg={4}>
                        <Carousel />
                  </Grid>
                  
                  <Grid item xs={12} lg={4} margin={1}>
                        <Grid   sx={{ padding:8, minHeight:330, marginX:2}}>
                              <Typography align={'center'} variant={'h6'} component={'h6'} margin={'15px'} color='yellow' backgroundColor='#3b0f1c' borderRadius={5}>
                                    <Skeleton> !!!! Öppettider!!!!</Skeleton> 
                              </Typography>                              
                              <LinearProgress color="secondary" />                           
                              
                              <Typography align={'center'} variant={'body1'} component={'h6'} paddingX={2} color='yellow' backgroundColor='#3b0f1c'>
                                    Wed: 16:00-01:00                      
                              </Typography>
                              <LinearProgress />
                              <Typography align={'center'} variant={'body1'} component={'h6'}  paddingX={2} color='yellow' backgroundColor='#3b0f1c'>
                                    Tor: 16:00-23:00                        
                              </Typography>
                              <LinearProgress />
                              <Typography align={'center'} variant={'body1'} component={'h6'}  paddingX={2} color='yellow' backgroundColor='#3b0f1c'>
                                    Fre: 16:00-02:00                        
                              </Typography>
                              <LinearProgress color="success" />
                              <Typography align={'center'} variant={'body1'} component={'h6'} paddingX={2} color='yellow' backgroundColor='#3b0f1c'>
                                    Lor-Sun: 17:00-02:00                        
                              </Typography>
                              <LinearProgress color="inherit" />
                        </Grid>
                  </Grid>
                  
                  
                  
                  
               </Grid>
               <GoogleMap />
               
         </div>;
}
