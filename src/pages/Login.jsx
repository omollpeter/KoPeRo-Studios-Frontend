import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo_light.png';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='bg-blue bg-opacity-10 rounded-[20px] px-5 py-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-[20px] my-[10px]'>
          <img
            src={logo}
            alt='logo'
            className='w-[130px] cursor-pointer hover:scale-105 transition-all duration-300'
            onClick={() => navigate('/')}
          />

          <h1 className='text-4xl font-extrabold'>Sign In</h1>
          <p className=' grid grid-cols-3 items-center gap-x-[1.6rem] before:h-[2px] before:bg-light before:block after:h-[2px] after:bg-light after:block'>
            Or continue with
          </p>
          <div className='flex flex-row space-x-3'>
            <FcGoogle className='border rounded-lg w-[120px] h-10 p-1 cursor-pointer hover:border-blue' />
            <FaLinkedin className='border text-linkedin rounded-lg w-[120px] h-10 p-1 cursor-pointer hover:border-blue' />
            <FaXTwitter className='border rounded-lg w-[120px] h-10 p-1 cursor-pointer hover:border-blue' />
          </div>
        </div>
        <div className='p-6 w-full'>
          <form action='' className='flex flex-col gap-4 w-[100%]'>
            <input
              type='text'
              placeholder='Email'
              className='p-2 rounded-md bg-slate-50 text-dark w-[100%]'
            />
            <input
              type='text'
              placeholder='Password'
              className='p-2 rounded-md bg-slate-50 text-dark w-[100%]'
            />
          </form>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <button className='bg-blue p-3 w-[140px] rounded-md transition-all duration-300 hover:scale-105'>
            Sign In
          </button>

          <p
            className='text-lg cursor-pointer'
            onClick={() => navigate('/login')}
          >
            {`Don't Have An Account?`}
            <a
              href='/register'
              className='text-blue underline ml-2 hover:text-pink'
            >
              Create One
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
