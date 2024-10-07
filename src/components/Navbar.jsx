import logo from '../assets/logo_light.png';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-slate-800 '>
      <img
        onClick={() => navigate('/')}
        className='w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300'
        src={logo}
        alt='logo'
      />
      <ul className='hidden md:flex items-start gap-5 font-medium text-light'>
        <NavLink to='/'>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/crew'>
          <li className='py-1'>Crew</li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1'>About</li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        <button
          onClick={() => navigate('/login')}
          className='text-light px-8 py-3 rounded-md border-blue border-solid font-light hidden md:block hover:bg-blue hover:-translate-y-1 transition-colors-transform duration-300 active:bg-slate-900'
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
