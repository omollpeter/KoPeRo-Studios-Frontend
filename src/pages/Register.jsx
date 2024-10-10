import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo_light.png';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center p-10 '>
      <div className='bg-blue bg-opacity-10 rounded-[20px] px-5 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-[20px] my-[10px]'>
          <img
            src={logo}
            alt='logo'
            className='w-[130px] cursor-pointer hover:scale-105 transition-all duration-300'
            onClick={() => navigate('/')}
          />
          <h1 className='text-3xl font-bold mt-4'>Welcome To Koper Studios!</h1>
          <p className='italic text-lg pb-[20px] text-slate-400 hover:text-blue'>
            Book The Space, Create The Magic!
          </p>
          <h1 className='text-4xl font-semibold'>Create Account</h1>
        </div>
        <div className='p-6'>
          <form action='' className='flex flex-col gap-4'>
            <div className='flex flex-row gap-x-10'>
              <input
                type='text'
                placeholder='First Name'
                className='p-2 rounded-md bg-slate-300 text-dark'
              />
              <input
                type='text'
                placeholder='Second Name'
                className='p-2 rounded-md bg-slate-300 text-dark'
              />
            </div>
            <input
              type='text'
              placeholder='Email'
              className='p-2 rounded-md bg-slate-300 text-dark'
            />
            <input
              type='text'
              placeholder='Password'
              className='p-2 rounded-md bg-slate-300 text-dark'
            />
            <input
              type='text'
              placeholder='Confirm Password'
              className='p-2 rounded-md bg-slate-300 text-dark'
            />
          </form>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <button className='bg-blue p-3 w-[140px] rounded-md transition-all duration-300 hover:scale-105'>
            Sign Up
          </button>
          <p className=' grid grid-cols-3 items-center gap-x-[1.6rem] before:h-[2px] before:bg-light before:block after:h-[2px] after:bg-light after:block'>
            Or continue with
          </p>
          <FcGoogle className='border rounded-md w-[100px] h-9 p-1 cursor-pointer hover:border-blue' />
          <p
            className='text-lg cursor-pointer'
            onClick={() => navigate('/login')}
          >
            Already Have An Account?
            <a href='/login' className='text-blue underline ml-2'>
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
