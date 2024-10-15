import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import banner from '../assets/banner_1.png';

const Banner = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='flex bg-blue rounded-lg px-6 sm:px-10 md:px-13 lg:px-12 my-20 md:mx-10'>
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div>
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-light'>
            Book Your Session Now for <br />
            Unforgettable Experience
          </p>
        </div>
        <button
          onClick={() => {
            currentUser ? navigate('/crew') : navigate('/login');
          }}
          className='bg-white text-sm font-semibold sm:text-base text-blue px-8 py-3 rounded-md mt-6 hover:scale-105 transition-all'
        >
          Book Now
        </button>
      </div>
      <div className='hidden md:block md:w-1/2 lg:w-[280px] relative'>
        <img
          className='w-full absolute bottom-0 right-0 max-w-md hover:-translate-y-1 transition-all  '
          src={banner}
          alt='banner'
        />
      </div>
    </div>
  );
};

export default Banner;
