import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Crew from './pages/Crew';
import CrewLogin from './Admin/CrewLogin';
import ClientLogin from './pages/ClientLogin';
import CrewProfile from './Admin/CrewProfile';
import CrewDashboard from './Admin/CrewDashboard';
import CrewLayout from './layouts/CrewLayout';
import ClientLayout from './layouts/ClientLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import UserAppointments from './pages/UserAppointments';
import Booking from './pages/Booking';
import Services from './pages/Service';
import Register from './pages/Register';
import CrewAppointments from './Admin/CrewAppointments';
import PasswordReset from './pages/PasswordReset';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/crew', element: <Crew /> },
      { path: '/crew/:cat', element: <Crew /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/services', element: <Services /> },
      { path: '/services/:crewId', element: <Services /> },
      { path: '/clients/:userId', element: <UserProfile /> },
      { path: '/user-appointments', element: <UserAppointments /> },
      { path: '/booking/:crewId/:serviceId', element: <Booking /> },
    ],
  },
  {
    path: '/register/',
    element: <Register />,
  },
  {
    path: '/login/',
    element: <ClientLogin />,
  },
  { path: '/password-reset', element: <PasswordReset /> },
  {
    path: '/crew',
    element: <CrewLayout />,
    children: [
      { path: 'login', element: <CrewLogin /> },
      { path: 'profile/:crewId', element: <CrewProfile /> },
      { path: 'dashboard/:crewId', element: <CrewDashboard /> },
      { path: 'appointments/:crewId', element: <CrewAppointments /> },
    ],
  },
]);

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
