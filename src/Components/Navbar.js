import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Rasel from '../Images/Rasel.jpg'
import DeliLogo from '../Images/DeliLogo.png'
import {Link} from 'react-router-dom'
import Drawer from '@mui/material/Drawer';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/init-firebase';


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut=()=>{
    signOut(auth)
    .then(()=>{
      //console.log('the user is log out')
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
    return (
    <AppBar position="fixed" sx={{backgroundColor:'#3b0f1c'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
           <a href='/'><Avatar alt="DeliLogo" src={DeliLogo} variant="square" sx={{ width: 48, height: 48}}/></a>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"              
              onClick={handleOpenNavMenu}                                     
            >
            <MenuIcon sx={{color:"yellow"}} />
            </IconButton>
            <Drawer
              id="menu-appbar"
              anchorel={anchorElNav}              
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
            >
              <MenuItem onClick={handleCloseNavMenu}> <Link to="/"><Typography textAlign="center" >Home</Typography></Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}> <Link to="/booking"><Typography textAlign="center">Booking</Typography></Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}> <Link to="/ticket"><Typography textAlign="center">Ticket</Typography></Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}> <Link to="/menu"><Typography textAlign="center">Menu</Typography></Link></MenuItem>
              <MenuItem onClick={handleCloseNavMenu}> <Link to="/contact"><Typography textAlign="center">Contact</Typography></Link></MenuItem>
              
            </Drawer>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color:'yellow', display: { xs: 'flex', md: 'none' } }}
          >
            Nya Deli Bar & Kök
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
          <Link to="/"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'yellow', display: 'block' }}>Home</Button></Link>
          <Link to="/booking"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'yellow', display: 'block' }}>Booking</Button></Link>
          <Link to="/ticket"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'yellow', display: 'block' }}>Ticket</Button></Link>
          <Link to="/menu"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'yellow', display: 'block' }}>Menu</Button></Link>
          <Link to="/contact"><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'yellow', display: 'block' }}>Contact</Button></Link>
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Settings" >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Rasel" src={Rasel} sx={{ width: 24, height: 24}} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                <Link to="/profile"><Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>Profile</Button></Link>
                <Link to="/"><Button onClick={logOut} sx={{ my: 2, display: 'block' }}>Logout</Button></Link>
                <Link to="/signup"><Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>Sign Up</Button></Link>
                <Link to="/login"><Button onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block' }}>Sign In</Button></Link>
         
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
