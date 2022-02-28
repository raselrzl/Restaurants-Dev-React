import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Grid from '@mui/material/Grid';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TicketCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid  justifyContent='center' sx={{display:'flex', marginTop:'90px', alignItems:'center',marginBottom:42}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#3b0f1c',color:'yellow' }} aria-label="recipe">
            Deli
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <Typography sx={{fontWeight:900}}>123456</Typography>
          </IconButton>
        }
        title="Buy tickets for"
        subheader="September 14, 2021"
      />
      <Grid sx={{backgroundColor:'black', height:'194px', textAlign:'center'}} id='homepage-image'>
        
      </Grid>   

      
      <CardActions disableSpacing>
        <IconButton>
          <Typography sx={{fontWeight:900}}>Buy for 250SEK</Typography>
        </IconButton>
        <IconButton aria-label="add to card">
          <AddBoxIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography>Details</Typography>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About</Typography>
          <Typography paragraph>
            if you buy this ticket, its included drinks and food.
          </Typography>                   
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );

}