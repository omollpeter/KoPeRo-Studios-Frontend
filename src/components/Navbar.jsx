import { useContext, useState } from 'react';
import logo from '../assets/logo_light.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import user_1 from '../assets/user_1.jpg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';

const Navbar = () => {
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  const [token, setToken] = useState(true);
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setToken(false);
  };

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-slate-800 '>
      <img
        onClick={() => navigate('/')}
        className='w-20 md:w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300'
        src={logo}
        alt='logo'
      />
      <ul className='hidden md:flex items-start gap-10 font-bold text-base text-light flex-grow justify-center'>
        <NavLink to='/'>
          <li className='py-1 hover:text-blue transition-all duration-300'>
            Home
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/crew'>
          <li className='py-1 hover:text-blue transition-all duration-300'>
            Our Crew
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/services'>
          <li className='py-1 hover:text-blue transition-all duration-300'>
            Our services
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about'>
          <li className='py-1 hover:text-blue transition-all duration-300'>
            About Us
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
          <li className='py-1 hover:text-blue transition-all duration-300'>
            Contact
          </li>
          <hr className='border-none outline-none h-0.5 bg-blue w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {currentUser ? (
          <div className='flex items-center gap-2 cursor-pointer group relative '>
            <img className='w-10 rounded-full' src={user_1} alt='user' />
            <span className='text-light'>{currentUser?.full_name}</span>
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-light z-20 opacity-0 transform -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0'>
              <div className='min-w-48 bg-slate-800 rounded flex flex-col gap-4 p-4'>
                <p
                  onClick={() => navigate('/user-profile')}
                  className='hover:text-blue cursor-pointer'
                >
                  My profile
                </p>
                <p
                  onClick={() => handleLogout()}
                  className='hover:text-blue cursor-pointer'
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='text-light px-8 py-3 rounded-md border-blue border-solid border font-light hover:bg-blue hover:-translate-y-1 transition-colors-transform duration-300 active:bg-slate-900'
          >
            Get started
          </button>
        )}
        <HiMenuAlt3
          onClick={() => setDropDown(true)}
          className='w-6 md:hidden text-light text-3xl'
        />
        {/* {Mobile navigation} */}
        <div
          className={`${
            dropDown ? 'fixed w-full' : 'h-0 w-0'
          }  md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-dark transition-all`}
        >
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={logo} alt='logo' className='w-40' />
            <CgClose
              onClick={() => setDropDown(false)}
              className='text-3xl text-light'
            />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink
              className='px-4 py-2 rounded inline-block'
              onClick={() => setDropDown(false)}
              to='/'
            >
              Home
            </NavLink>
            <NavLink
              className='px-4 py-2 rounded inline-block'
              onClick={() => setDropDown(false)}
              to='/crew'
            >
              Our Crew
            </NavLink>
            <NavLink
              className='px-4 py-2 rounded inline-block'
              onClick={() => setDropDown(false)}
              to='/services'
            >
              Our Services
            </NavLink>
            <NavLink
              className='px-4 py-2 rounded inline-block'
              onClick={() => setDropDown(false)}
              to='/about'
            >
              About us
            </NavLink>
            <NavLink
              className='px-4 py-2 rounded inline-block'
              onClick={() => setDropDown(false)}
              to='/contact'
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
