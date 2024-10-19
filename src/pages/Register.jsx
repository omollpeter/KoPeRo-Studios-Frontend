import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo_light.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const Register = () => {
  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    username: '',
    phone: '',
    role: 'regular',
    email: '',
    password1: '',
    password2: '',
  });

  const [focusedFields, setFocusedFields] = useState({
    username: false,
    email: false,
    phone: false,
    password1: false,
    password2: false,
  });
  const [errors, setErrors] = useState({
    first_name: '',
    last_name: '',
    username: '',
    phone: '',
    role: '',
    email: '',
    password1: '',
    password2: '',
  });
  const [err, setErr] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [password1Visible, setPassword1Visible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'first_name':
      case 'last_name':
        if (!/^[A-Za-z]{3,16}$/.test(value)) {
          error =
            'Name must be 3-16 characters and contain no special characters.';
        }
        break;
      case 'username':
        if (!/^[A-Za-z0-9]{3,16}$/.test(value)) {
          error =
            'Username must be 3-16 characters and contain no special characters.';
        }
        break;
      case 'phone':
        if (!/^\+?[1-9][0-9]{7,14}$/.test(value)) {
          error = 'Phone number must be between 7-14 digits with a "+" sign.';
        }
        break;
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Enter a valid email address.';
        }
        break;
      case 'password1':
        if (
          !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+={};:'",<.>]).{8,}$/.test(
            value
          )
        ) {
          error =
            'Password must be at least 8 characters and include uppercase, lowercase, a number, and a special character.';
        }
        break;
      case 'password2':
        if (value !== inputs.password1) {
          error = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }

    return error;
  };

  const handleFocus = (field) => {
    setFocusedFields((prev) => ({ ...prev, [field]: false }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const togglePassword1 = () => {
    setPassword1Visible(!password1Visible);
  };

  const togglePassword2 = () => {
    setPassword2Visible(!password2Visible);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    const error = new validateField(name, value);

    setErrors((prev) => ({ ...prev, [name]: error }));

    if (e.target.name === 'password1') {
      setPasswordError('');
    }

    if (name === 'password1' || name === 'password2') {
      setPasswordError('');
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formValid = true;
    let newErrors = {};

    Object.keys(inputs).forEach((key) => {
      const error = validateField(key, inputs[key]);
      if (error) {
        formValid = false;
        newErrors[key] = error;
      }
    });

    console.log(errors);
    setErrors(newErrors);

    console.log(formValid);

    if (formValid) {
      try {
        await axios.post('https://mady.tech/api/v1/auth/register/', inputs);
        toast.error('successfully registered');
        navigate('/login');
      } catch (err) {
        if (err.response) {
          console.log('Error:', err.response.data);
          setErr(err.response.data);
        } else {
          console.log('Error:', err.message);
          setErr(err.message);
        }
      }
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
                value={inputs.first_name}
                onChange={handleChange}
                className={`p-2 rounded-md bg-slate-50 text-dark max-[768px]:w-[130px] ${
                  errors.first_name ? 'border-red-500' : ''
                }`}
              />

              <input
                required
                type='text'
                value={inputs.last_name}
                placeholder='Last Name'
                pattern='^[A-Za-z0-9]{3,16}$'
                name='last_name'
                onChange={handleChange}
                className={`p-2 rounded-md bg-slate-50 text-dark max-[768px]:w-[130px] ${
                  errors.last_name ? 'border-red-500' : ''
                }`}
              />
            </div>
            {errors.first_name && (
              <span className='text-red-500 text-sm'>{errors.first_name}</span>
            )}
            {errors.last_name && (
              <span className='text-red-500 text-sm'>{errors.last_name}</span>
            )}
            <input
              required
              type='text'
              placeholder='Username'
              name='username'
              value={inputs.username}
              pattern='^[A-Za-z0-9]{3,16}$'
              onChange={handleChange}
              onBlur={handleBlur}
              className={`peer p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full ${
                errors.username ? 'border-red-500' : ''
              }`}
            />
            {errors.username && (
              <span className='text-red-500 text-sm'>{errors.username}</span>
            )}
            <input
              required
              type='email'
              placeholder='Email'
              name='email'
              value={inputs.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <span className='text-red-500 text-sm'>{errors.email}</span>
            )}
            <input
              required
              type='text'
              placeholder='Phone Number'
              name='phone'
              value={inputs.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`peer p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full ${
                errors.phone ? '' : 'border-red-500'
              }`}
            />
            {errors.phone && (
              <span className='text-red-500 text-sm'>{errors.phone}</span>
            )}
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                required
                type={password1Visible ? 'text' : 'password'}
                placeholder='Password'
                name='password1'
                value={inputs.password1}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`peer text-dark border-none outline-0 w-full ${
                  errors.password1 ? 'border-red-500' : ''
                }`}
              />
              {password1Visible ? (
                <IoMdEye
                  className='text-dark text-2xl cursor-pointer'
                  onClick={() => togglePassword1()}
                />
              ) : (
                <IoMdEyeOff
                  className='text-blue text-2xl cursor-pointer'
                  onClick={() => togglePassword1()}
                />
              )}
            </div>
            {errors.password1 && (
              <span className='text-red-500 text-sm'>{errors.password1}</span>
            )}
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                required
                type={password2Visible ? 'text' : 'password'}
                placeholder='Confirm Password'
                name='password2'
                onChange={handleChange}
                onBlur={handleBlur}
                className={`peer text-dark border-none outline-0 w-full ${
                  errors.password2 ? 'border-red-500' : ''
                }`}
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
            {errors.password2 && (
              <span className='text-red-500 text-sm'>{errors.password2}</span>
            )}
          </form>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <button
            onClick={handleSubmit}
            className='bg-blue p-3 w-[140px] max-[768px]:w-[120px] rounded-md transition-all duration-300 hover:scale-105'
          >
            Sign Up
          </button>
          {err && <p className='text-red-500'>{err.message}</p>}
          <div className='ml-4 flex items-center justify-center gap-x-[1.9rem] w-full'>
            <span className='h-[2px] w-[70px] md:w-full bg-light block'></span>
            <p className='text-center md:w-full'>Continue with</p>
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
