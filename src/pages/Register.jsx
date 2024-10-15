import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo_light.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Register = () => {
  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    username: '',
    phone: '',
    email: '',
    password1: '',
    password2: '',
  });

  const [err, setError] = useState(null);
  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const togglePassword1 = () => {
    setPassword1Visible(!password1Visible);
  };

  const togglePassword2 = () => {
    setPassword2Visible(!password2Visible);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://mady.tech/api/v1/auth/register/', inputs);
      navigate('/login');
    } catch (err) {
      setError('User Already Exists', err);
    }
  };

  return (
    <div className='flex items-center justify-center p-10'>
      <div className='bg-blue bg-opacity-10 rounded-[20px] pb-10 px-5 flex flex-col justify-center items-center '>
        <div className='flex flex-col justify-center items-center gap-[20px] my-[10px]'>
          <img
            src={logo}
            alt='logo'
            className='w-[130px] cursor-pointer hover:scale-105 transition-all duration-300'
            onClick={() => navigate('/')}
          />
          <h1 className='text-4xl font-extrabold'>Create Account</h1>
        </div>
        <div className='p-6 w-[100%]'>
          <form
            action=''
            className='flex flex-col gap-4 justify-center items-center'
          >
            <div className='flex flex-row gap-x-10 gap-y-4'>
              <input
                required
                type='text'
                name='first_name'
                placeholder='First Name'
                onChange={handleChange}
                className='p-2 rounded-md bg-slate-50 text-dark max-[768px]:w-[130px]'
              />
              <input
                required
                type='text'
                placeholder='Last Name'
                name='last_name'
                onChange={handleChange}
                className='p-2 rounded-md bg-slate-50 text-dark max-[768px]:w-[130px]'
              />
            </div>
            <input
              required
              type='text'
              placeholder='Username'
              name='Username'
              onChange={handleChange}
              className='p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full'
            />
            <input
              required
              type='email'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              className='p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full'
            />
            <input
              required
              type='text'
              placeholder='Phone Number'
              name='phone'
              onChange={handleChange}
              className='p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full'
            />
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                required
                type={password1Visible ? 'text' : 'password'}
                placeholder='Password'
                name='password_1'
                className='text-dark border-none outline-0 w-full'
              />
              {password1Visible ? (
                <IoMdEyeOff
                  className='text-dark text-2xl cursor-pointer'
                  onClick={() => togglePassword1()}
                />
              ) : (
                <IoMdEye
                  className='text-blue text-2xl cursor-pointer'
                  onClick={() => togglePassword1()}
                />
              )}
            </div>
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                required
                type={password2Visible ? 'text' : 'password'}
                placeholder='Confirm Password'
                name='password_2'
                className='text-dark border-none outline-0 w-full'
              />
              {password2Visible ? (
                <IoMdEyeOff
                  className='text-dark text-2xl cursor-pointer'
                  onClick={() => togglePassword2()}
                />
              ) : (
                <IoMdEye
                  className='text-blue text-2xl cursor-pointer'
                  onClick={() => togglePassword2()}
                />
              )}
            </div>
          </form>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <button
            onClick={handleSubmit}
            className='bg-blue p-3 w-[140px] max-[768px]:w-[120px] rounded-md transition-all duration-300 hover:scale-105'
          >
            Sign Up
          </button>
          {err && <p className='text-red-500'>{err}</p>}
          <div className='ml-4 flex items-center justify-center gap-x-[1.9rem] w-full'>
            <span className='h-[2px] w-[80px] md:w-full bg-light block'></span>
            <p className='text-center w-full'>continue with</p>
            <span className='h-[2px] w-[80px] md:w-full bg-light block'></span>
          </div>
          <div className='flex flex-row space-x-3'>
            <div className='flex flex-row space-x-2 justify-center items-center border border-slate-400  rounded-lg w-[130px]  max-[768px]:w-[100px] h-12 p-3 hover:border-blue cursor-pointer'>
              <FcGoogle className='cursor-pointer text-3xl ' />
              <span className='text-lg hover:text-blue hidden md:block'>
                Google
              </span>
            </div>
            <div className='flex flex-row space-x-2 justify-center items-center border border-slate-400  rounded-lg w-[130px] max-[768px]:w-[100px]  h-12 p-3 hover:border-blue cursor-pointer'>
              <FaLinkedin className=' text-linkedin text-3xl cursor-pointer' />
              <span className='text-lg hover:text-blue hidden md:block'>
                LinkedIn
              </span>
            </div>
            <div className='flex flex-row space-x-2 justify-center items-center border border-slate-400  rounded-lg w-[130px] max-[768px]:w-[100px]  h-12 p-3 hover:border-blue cursor-pointer'>
              <FaXTwitter className='cursor-pointer text-3xl' />
              <span className='text-lg hover:text-blue hidden md:block'>{`Twitter(X)`}</span>
            </div>
          </div>
          <p
            className='text-lg cursor-pointer'
            onClick={() => navigate('/login')}
          >
            Already Have An Account?
            <a
              href='/login'
              className='text-blue underline ml-2 hover:text-pink'
            >
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
