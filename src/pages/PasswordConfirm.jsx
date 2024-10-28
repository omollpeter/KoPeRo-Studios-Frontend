import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import logo from '../assets/logo_light.png';
import { toast } from 'sonner';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const PasswordConfirm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const uidb64 = queryParams.get('uid');
  const token = queryParams.get('tk');

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const togglePassword2 = () => {
    setPassword2Visible(!password2Visible);
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const { data } = await axios.post(
        'https://mady.tech/api/v1/auth/password-reset/client/confirm/',
        {
          uidb64,
          token,
          new_password: newPassword,
        }
      );
      setResetSuccess(true);
      toast.success(data.message);
    } catch (err) {
      const error = err.response?.data;
      if (error?.new_password) toast.error(error.new_password[0]);
      else toast.error('Password reset failed');
    }
  };

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='bg-blue bg-opacity-10 w-[400px] rounded-[20px] px-5 py-4 flex flex-col gap-8 items-center'>
        <img
          src={logo}
          alt='logo'
          className='w-[150px] cursor-pointer hover:scale-105 transition-all duration-300'
          onClick={() => navigate('/')}
        />
        <h2 className='text-xl font-bold mb-4'>Reset Your Password</h2>

        {resetSuccess ? (
          <div className='text-center'>
            <p className='text-green-600'>
              Your password has been reset successfully!
            </p>
            <button
              onClick={() => navigate('/login')}
              className='text-blue-600 underline mt-4'
            >
              Go to Login
            </button>
          </div>
        ) : (
          <form
            onSubmit={handlePasswordReset}
            className='flex flex-col items-center gap-4 w-full'
          >
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                required
                type={passwordVisible ? 'text' : 'password'}
                placeholder='New Password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className='rounded-md bg-slate-50 text-dark w-[300px] md:w-full outline-0'
              />
              {passwordVisible ? (
                <IoMdEye
                  className='text-dark text-2xl cursor-pointer'
                  onClick={() => togglePassword()}
                />
              ) : (
                <IoMdEyeOff
                  className='text-blue text-2xl cursor-pointer'
                  onClick={() => togglePassword()}
                />
              )}
            </div>
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                type={password2Visible ? 'text' : 'password'}
                placeholder='Confirm New Password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='rounded-md bg-slate-50 text-dark w-[300px] md:w-full outline-0'
                required
              />
              {password2Visible ? (
                <IoMdEye
                  className='text-dark text-2xl cursor-pointer'
                  onClick={() => togglePassword2()}
                />
              ) : (
                <IoMdEyeOff
                  className='text-blue text-2xl cursor-pointer'
                  onClick={() => togglePassword2()}
                />
              )}
            </div>
            <button
              type='submit'
              className='bg-blue p-3 w-full rounded-full transition-all duration-300 hover:scale-105'
            >
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordConfirm;
