import { Outlet, useLocation } from 'react-router-dom';
import CrewNavbar from '../Admin/CrewNavbar';
import Footer from '../components/Footer';

const CrewLayout = () => {
  const location = useLocation();

  return (
    <>
      <CrewNavbar />
      <Outlet />
    </>
  );
};

export default CrewLayout;
