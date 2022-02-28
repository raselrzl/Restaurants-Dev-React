import React, { useContext } from 'react';
import Card from '../Components/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { AppContext } from '../Contexts/Context';


export default function Menu() {
  const { menuitems }=useContext(AppContext)

  return <div>
            <Container sx={{marginY:5}}>

            {menuitems.map((AfterworkDinnerSeparateTimes)=>(
                <>
                <Typography 
                  variant="h5"
                  component='h2'
                  marginTop={10}
                  marginBottom={3}
                  align='center'
                  sx={{fontWeight:'bold',color:'#3b0f1c'}}
                  key={AfterworkDinnerSeparateTimes.id}
                > 
                { AfterworkDinnerSeparateTimes.name }
                </Typography>

                <Grid container spacing={5}>
                  {AfterworkDinnerSeparateTimes.menuitems.map((items, index)=>(
                  <Card items={items} key={index}/>
                   ))}
               </Grid>
                </>
            ))}

            </Container>
           
         </div>;
}
