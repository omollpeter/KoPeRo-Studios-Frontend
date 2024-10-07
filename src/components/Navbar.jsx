import { useState } from 'react';
import logo from '../assets/logo_light.png';
import { NavLink, useNavigate } from 'react-router-dom';
import user_1 from '../assets/user_1.jpg';
import dropIcon from '../assets/dropdown_icon.svg';

const Navbar = () => {
  const navigate = useNavigate();

  const [dropDown, setDropDown] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-slate-800 '>
      <img
        onClick={() => navigate('/')}
        className='w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300'
        src={logo}
        alt='logo'
      />
      <ul className='hidden md:flex items-start gap-10 font-bold text-base text-light flex-grow justify-center'>
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
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative '>
            <img className='w-8 rounded-full' src={user_1} alt='user' />
            <img className='w-2.5' src={dropIcon} alt='drop down' />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-light z-20 hidden group-hover:block transition-all'>
              <div className='min-w-48 bg-slate-800 rounded flex flex-col gap-4 p-4'>
                <p
                  onClick={() => navigate('/user-profile')}
                  className='hover:text-blue cursor-pointer'
                >
                  My profile
                </p>
                <p
                  onClick={() => setToken(false)}
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
            className='text-light px-8 py-3 rounded-md border-blue border-solid font-light hidden md:block hover:bg-blue hover:-translate-y-1 transition-colors-transform duration-300 active:bg-slate-900'
          >
            Get started
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
