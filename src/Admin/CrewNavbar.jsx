import React, { useContext } from 'react';
import logo from '../assets/crew_logo.png';
import { useNavigate } from 'react-router-dom';
import { CrewContext } from '../context/CrewContext';
import { toast } from 'sonner';

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(CrewContext);

  const handleLogout = () => {
    logout();
    toast.success('Logged out Successfully');
    navigate('/crew/login');
  };

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b border-b-slate-600'>
      <div className='flex items-center gap-2 text-sm'>
        <img
          className='w-36 sm:w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300'
          src={logo}
          alt='logo'
        />
        <p className='border px-2.5 py-0.5 rounded-lg border-slate-400 text-light cursor-pointer hover:border-blue'>
          crew Dashboard
        </p>
      </div>
      <button
        className='bg-blue text-light text-md px-10 py-2 rounded-full hover:bg-pink transition-all'
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
