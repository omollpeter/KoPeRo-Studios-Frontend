import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Crew from './pages/Crew';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import UserAppointments from './pages/userAppointments';
import Booking from './pages/Booking';
import Services from './pages/Service';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Register';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/crew', element: <Crew /> },
      { path: '/crew/:cat', element: <Crew /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/services', element: <Services /> },
      { path: '/profile/:userId', element: <UserProfile /> },
      { path: '/user-appointments', element: <UserAppointments /> },
      { path: '/booking/:crewId', element: <Booking /> },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
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
