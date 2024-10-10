import { FiMail } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Contact = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-center items-center'>
        <h1 className='relative text-light font-bold text-3xl lg:text-4xl text-shadow-sm before:absolute before:rounded-md before:-bottom-[0.1px] before:left-0 before:w-full before:h-[13px] before:bg-blue before:-z-10  hover:before:bg-pink'>
          Contact Us
        </h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-[200px]'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <FaLocationDot className='text-slate-400 text-5xl hover:text-blue' />
            <div className='flex flex-col gap-1'>
              <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
                Location
              </p>
              <p className='hover:text-blue cursor-pointer'>
                P.O. Box 001-10000, KPR
                <br />
                Tom Mboya Strt, Nairobi
              </p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-start items-center w-full'>
            <IoLogoWhatsapp className='text-slate-400 text-5xl hover:text-blue' />
            <div className='flex flex-col gap-1'>
              <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
                Whatsapp
              </p>
              <p className='hover:text-blue cursor-pointer'>+2547000000000</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-start items-center w-full'>
            <FaPhoneAlt className='text-slate-400 text-5xl hover:text-blue' />
            <div className='flex flex-col gap-1'>
              <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
                Telephone
              </p>
              <p className='hover:text-blue cursor-pointer'>+2547000000000</p>
            </div>
          </div>
          <div className='flex flex-row gap-4 justify-start items-center w-full'>
            <FiMail className='text-slate-400 text-5xl hover:text-blue' />
            <div className='flex flex-col gap-1'>
              <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
                Email
              </p>
              <p className='hover:text-blue cursor-pointer'>
                info@kopero.ac.ke
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 bg-blue rounded-md py-[40px] px-[30px] lg:px-[60px] '>
          <p className='text-lg'>Let us hear from you</p>
          <div>
            <form
              action=''
              className='flex flex-col gap-6 justify-center items-center'
            >
              <div className='flex flex-row gap-4'>
                <input
                  type='text'
                  placeholder='First Name'
                  required
                  className='rounded-md w-[150px] h-10 text-dark p-2'
                />
                <input
                  type='text'
                  required
                  placeholder='Last Name'
                  className='rounded-md w-[150px] h-10 text-dark p-2'
                />
              </div>
              <input
                type='email'
                placeholder='Email Address'
                required
                className='rounded-md w-[320px] h-10 text-dark p-2'
              />
              <textarea
                type='text'
                placeholder='Enter Your Message'
                required
                className='rounded-sm w-[320px] h-[120px] text-dark p-2 box-border'
              />
              <button
                type='submit'
                className='bg-slate-900 rounded-md w-[100px] h-[40px] text-light transition:transform duration-300 hover:bg-slate-800 hover:border-3 hover:-translate-y-1'
              >
                {' '}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
