import logo from '../assets/logo_light.png';
import {
  FaLocationDot,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-10 md:gap-20 my-6 py-10'>
        <img
          src={logo}
          alt='logo'
          className='w-[120px] md:w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300 mb-auto'
        />
        <div className='flex flex-col gap-2'>
          <p className='text-slate-400 text-lg'>Quick Links</p>
          <a className='text-lg hover:text-blue hover:underline cursor-pointer'>
            Terms and Conditions
          </a>
          <a className='text-lg hover:text-blue hover:underline cursor-pointer'>
            Privacy Policy
          </a>
          <a className='text-lg hover:text-blue hover:underline cursor-pointer'>
            FAQs
          </a>
          <a className='text-lg hover:text-blue hover:underline cursor-pointer'>
            Legal
          </a>
          <a className='text-lg hover:text-blue hover:underline cursor-pointer'>
            Cookies
          </a>
          <a className='text-lg hover:text-blue hover:underline cursor-pointer'>
            Recruitmens
          </a>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <FaLocationDot className='text-slate-400 text-3xl hover:text-blue' />
            <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
              Location
            </p>
          </div>
          <p className='hover:text-blue cursor-pointer'>
            P.O. Box 001-10000, KPR <br />
            Tom Mboya Strt, Nairobi
          </p>
          <div className='flex gap-4'>
            <IoLogoWhatsapp className='text-slate-400 text-3xl hover:text-blue' />
            <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
              Whatsapp
            </p>
          </div>
          <a href='' className='hover:text-blue '>
            +2547000000000
          </a>
          <div className='flex gap-4'>
            <FaPhoneAlt className='text-slate-400 text-3xl hover:text-blue' />
            <p className='text-slate-400 text-lg cursor-pointer hover:text-blue'>
              Telephone
            </p>
          </div>
          <a href='' className='hover:text-blue '>
            +2547000000000
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-4'>
            <p className='text-slate-400 text-lg'>Stay In Touch</p>
            <div className='flex gap-6'>
              <FaFacebookF className='text-light text-3xl md:text-4xl hover:text-blue ' />
              <FaTwitter className='text-light text-3xl md:text-4xl hover:text-blue ' />
              <FaLinkedin className='text-light text-3xl md:text-4xl hover:text-blue ' />
              <FaInstagram className='text-light text-3xl md:text-4xl hover:text-blue ' />
            </div>
          </div>
          <div className='py-12 flex flex-col gap-2'>
            <div>
              <input
                type='text'
                className='rounded-sm h-8 w-[280px] text-dark p-2'
              />
              <input
                type='submit'
                className='rounded-sm h-8 w-20 bg-blue transition-transform duration-300 hover:scale-105 '
              />
            </div>
            <p className='text-slate-400'>
              Subscribe to our newsletters for latest offers
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Footer;
