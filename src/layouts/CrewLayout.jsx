import { Outlet } from 'react-router-dom';
import CrewNavbar from '../Admin/CrewNavbar';
import Footer from '../components/Footer';

const CrewLayout = () => {
  return (
    <>
      <CrewNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default CrewLayout;
