import '../App.css'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography, Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { createTheme, ThemeProvider } from '@mui/material';

const theme=createTheme({
    components:{
        MuiTypography:{
            variants:[
                {
                    props:{
                        variant:"body2"
                    },
                    style:{
                        fontSize:11,
                    }
                },
                {
                    props:{
                        variant:"body3"
                    },
                    style:{
                        fontSize:9,
                    }
                }
            ]
        }
    }
})


const Card=({ items })=>{
    return   <Grid item xs={12} sm={6} md={3} sx={{fontWeight:'bold',color:'#3b0f1c'}}>
                <ThemeProvider theme={theme}>
                 <Paper elevation={3} sx={{paddingBottom:1}}>
                    <img src={items.image} alt='burger' className='img'/>                    
                    <Box paddingX={1} sx={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                      <Box sx={{display:'flex', alignItems:'center'}}>
                        <RestaurantMenuIcon sx={{ width:16}}/>
                        <Typography sx={{fontWeight:'bold'}} variant ='body1' component="h3" marginLeft={1}>{items.name}</Typography>
                      </Box>
                      
                      <Typography sx={{fontWeight:'bold'}} variant="body1" component="h3">SEK {items.price}</Typography>
                    </Box>
                    <Box padding={1}>                        
                        <Typography variant='body2' component='p'>
                           {items.ingedients}
                        </Typography>
                    </Box>
                    <Box sx={{display:'flex', alignItems:'center'}} paddingLeft={1}>
                       <Rating name="read-only" value={items.rating} readOnly precision={0.5} size="small"/>
                       <Typography variant='body2' component='p' marginLeft={1}>
                           {items.rating}
                        </Typography>
                        <Typography variant='body3' component='p' marginLeft={1}>
                           ({items.numberOfReviews} reviews)
                        </Typography>
                    </Box>
                    
                 </Paper>
                 </ThemeProvider>
             </Grid>           
           
}
export default Card;