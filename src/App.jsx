import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/userProfile';
import UserAppointments from './pages/userAppointments';
import Booking from './pages/Booking';
import Services from './pages/Service';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/crew/:cat' element={<Crew />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/login' element={<Login />} />
        <Route path='/user-profile' element={<UserProfile />} />
        <Route path='/user-appointments' element={<UserAppointments />} />
        <Route path='/booking/:crewId' element={<Booking />} />
      </Routes>
    </div>
  );
};

export default App;
