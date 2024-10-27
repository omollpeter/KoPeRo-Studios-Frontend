import React, { useState } from 'react';
import logo from '../assets/logo_light.png';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'sonner';

const PasswordReset = () => {
  const [inputs, setInputValue] = useState({
    email: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      const { data } = await axios.post(
        'https://mady.tech/api/v1/auth/password-reset/client/',
        inputs
      );
      console.log(data);
      toast.success(data.message);
    } catch (err) {
      const error = err.response.data;
      console.log('Error sendning reset link', err);
      error.email && toast.error(error.email[0]);
    }
  };

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='bg-blue bg-opacity-10 w-[400px]  rounded-[20px] px-5 py-4 flex flex-col items-center'>
        <div className='flex flex-col justify-center items-center gap-[20px] my-[10px] w-full'>
          <img
            src={logo}
            alt='logo'
            className='w-[150px] cursor-pointer hover:scale-105 transition-all duration-300'
            onClick={() => navigate('/')}
          />
          <div className='ml-4 flex items-center justify-center gap-x-[1.9rem] w-full'>
            <span className='h-[2px] w-[140px] bg-light block'></span>
            <h1 className='text-xl font-extrabold w-full text-center'>
              Forgot Password
            </h1>
            <span className='h-[2px] w-[140px] bg-light block'></span>
          </div>
          <p className='text-center md:text-lg text-slate-300'>
            Enter your email address to get the password reset link
          </p>
        </div>
        <div className='p-6 w-full flex flex-col gap-7'>
          <form
            action=''
            className='flex flex-col justify-center items-center gap-4 w-[100%]'
          >
            <input
              required
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              className='p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full'
            />
          </form>
          <button
            onClick={handleSubmit}
            className='bg-blue p-3 w-full rounded-full transition-all duration-300 hover:scale-105'
          >
            Request Reset Link
          </button>
        </div>
        <div
          className='flex flex-row justify-center items-center gap-1 hover:text-blue cursor-pointer text-base'
          onClick={() => navigate('/login')}
        >
          <IoMdArrowBack />
          <p className='text-center'>Back to Login</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
