import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../PagesLayout/Home';
import Contact from '../PagesLayout/Contact';
import Ticket from '../PagesLayout/Ticket';
import Login from '../PagesLayout/Login';
import Booking from '../PagesLayout/Booking';
import SignUp from '../PagesLayout/SignUp';
import Menu from '../PagesLayout/Menu';
import ResponsiveAppBar from './Navbar';
import ResetPassword from '../PagesLayout/ResetPassword';
import Error from '../PagesLayout/Error';
import Footer from './Footer';
import Profile from '../PagesLayout/Profile';

function AppRouter() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/ticket" element={<Ticket />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/booking" element={<Booking />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/menu" element={<Menu />}/>
        <Route path="/reset-password" element={<ResetPassword />}/>
        <Route path="/profile" element ={<Profile />}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer sx={{bottom:0}}/>
    </Router>
  );
}

export default AppRouter;
