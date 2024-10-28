import React, { useState } from 'react';
import logo from '../assets/crew_logo.png';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import axios from 'axios';
import { toast } from 'sonner';

const CrewPasswordReset = () => {
  const [inputs, setInputValue] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        'https://mady.tech/api/v1/auth/password-reset/crew/',
        inputs
      );
      toast.success(data.message);
      setSuccess(true);
    } catch (err) {
      const error = err.response?.data;
      console.log('Error sending reset link', err);
      if (error?.email) {
        toast.error(error.email[0]);
        setError(true);
      } else {
        toast.error('Failed to send reset link');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='bg-blue bg-opacity-10 w-[400px] rounded-[20px] px-5 py-4 flex flex-col items-center'>
        <img
          src={logo}
          alt='logo'
          className='w-[150px] cursor-pointer hover:scale-105 transition-all duration-300'
          onClick={() => navigate('/')}
        />
        {success ? (
          <div className='flex flex-col items-center text-center mt-6'>
            <h2 className='text-xl font-bold'>Check Your Email</h2>
            <p className='text-slate-300 mt-2'>
              A password reset link has been sent to your email address. Please
              check your inbox to proceed.
            </p>
            <button
              onClick={() => navigate('/crew/login')}
              className='mt-4 text-blue underline hover:text-blue-700 transition-all duration-300'
            >
              Back to Login
            </button>
          </div>
        ) : (
          <div className='flex flex-col gap-6 w-full items-center'>
            <h1 className='text-xl font-extrabold w-full text-center mt-4'>
              Forgot Password
            </h1>
            <p className='text-center text-slate-300'>
              Enter your email address to get the password reset link.
            </p>
            <form
              onSubmit={handleSubmit}
              className='flex flex-col items-center gap-4 w-full'
            >
              <input
                required
                type='text'
                placeholder='Email'
                name='email'
                onChange={handleChange}
                className={`p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full ${
                  error ? 'border-red-600 border-2' : ''
                }`}
              />
              <button
                type='submit'
                disabled={loading}
                className={`p-3 w-full rounded-full transition-all duration-300 ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue hover:scale-105'
                }`}
              >
                {loading ? 'Requesting...' : 'Request Reset Link'}
              </button>
            </form>
            <div
              className='flex flex-row justify-center items-center gap-1 hover:text-blue cursor-pointer text-base mt-4'
              onClick={() => navigate('/crew/login')}
            >
              <IoMdArrowBack />
              <p className='text-center'>Back to Login</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CrewPasswordReset;
