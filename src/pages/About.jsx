import { useState } from 'react';
import studio from '../assets/studio.jpg';
import { LuPlus, LuMinus } from 'react-icons/lu';

const About = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);

  const toggleMessage = () => setIsMessageOpen(!isMessageOpen);
  const toggleVision = () => setIsVisionOpen(!isVisionOpen);

  return (
    <div>
      <div className='flex flex-col justify-center items-center md:flex-col lg:flex-row lg:mb-8'>
        <div className='md:w-full lg:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[4vw]'>
          <h1 className='relative text-light font-bold text-3xl lg:text-4xl text-shadow-sm before:absolute before:rounded-md before:-bottom-[0.1px] before:left-0 before:w-full before:h-[13px] before:bg-blue before:-z-10  hover:before:bg-pink'>
            About KoPeRo
          </h1>
          <p className='text-slate-400'>
            Kopero Studios is a creative powerhouse dedicated to capturing
            life’s most meaningful moments through photography and videography.
            With a passion for storytelling and a keen eye for detail, we
            specialize in delivering high-quality, personalized content that
            reflects the unique essence of every subject. Whether it is
            portraits, events, or street scenes, Kopero Studios brings a blend
            of professionalism and artistry to every project, ensuring memorable
            and impactful visuals for all our clients.
          </p>
          <div className='border-b-4 border-b-slate-800 py-4'>
            <div className='flex justify-between items-center w-full'>
              <h2
                className='text-light font-bold text-2xl cursor-pointer hover:text-blue'
                onClick={toggleMessage}
              >
                Message:
              </h2>
              <div className='ml-4'>
                {isMessageOpen ? (
                  <LuMinus
                    className='cursor-pointer text-xl hover:text-blue'
                    onClick={toggleMessage}
                  />
                ) : (
                  <LuPlus
                    className='cursor-pointer text-xl hover:text-blue'
                    onClick={toggleMessage}
                  />
                )}
              </div>
            </div>

            {isMessageOpen && (
              <p className='text-slate-400  py-3 '>
                We’re excited to work with you and capture moments that will
                last a lifetime. Our team is dedicated to delivering
                high-quality photos and videos that reflect your unique vision.
              </p>
            )}
          </div>
          <div>
            <div className='flex justify-between items-center w-full transition-all duration-300'>
              <h2
                className='text-light font-bold text-2xl cursor-pointer hover:text-blue'
                onClick={toggleVision}
              >
                Vision:
              </h2>
              <div className='ml-4'>
                {isVisionOpen ? (
                  <LuMinus
                    className='cursor-pointer text-xl hover:text-blue'
                    onClick={toggleVision}
                  />
                ) : (
                  <LuPlus
                    className='cursor-pointer text-xl hover:text-blue'
                    onClick={toggleVision}
                  />
                )}
              </div>
            </div>
            {isVisionOpen && (
              <p className='text-slate-400 py-3'>
                To be the leading creative hub for photography and videography,
                where every moment is artfully captured and every story is
                uniquely told. Our vision is to inspire and connect through
                impactful visuals, offering an unparalleled experience in
                creativity and professionalism for all our clients.
              </p>
            )}
          </div>
        </div>
        <div className='relative group '>
          <div className='hidden lg:block absolute -top-[50px] left-[300px] h-[500px] w-1/2 bg-blue rounded-xl transition-color duration-500 group-hover:bg-pink z-[-1]'></div>
          <div className='absolute inset-0 bg-blue opacity-10 group-hover:opacity-40 group-hover:shadow-lg group-hover:shadow-blue/30 rounded-xl transition-color duration-500 group-hover:scale-105 z-10' />
          <img
            src={studio}
            alt=''
            className='h-[250px] w-[2000px] lg:h-[400px] lg:w-[500px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-105'
          />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-[10px] mb-10 px-20'>
        <div className=''>
          <h1 className='text:3xl lg:text-4xl font-bold py-5'>Our Offices</h1>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81707950275!2d36.822514874437985!3d-1.2836287356220994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129d3e9e4a7%3A0xd7a2234ccaf4740e!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1728472153114!5m2!1sen!2ske'
            width='600'
            height='400'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-lg'
          ></iframe>
        </div>
        <div className='flex flex-col gap-6 m-auto'>
          <div className=''>
            <p className='text-slate-400 text-lg'>Opens</p>
            <p className='text-light text-lg'>Mondays - Saturdays</p>
            <p className='text-light text-md'>7.00 am - 7.00 pm</p>
          </div>
          <div>
            <p className='text-slate-400 text-lg'>Closes</p>
            <p className='text-light text-lg'>Sundays</p>
          </div>
          <div>
            <p className='text-slate-400 text-lg'>Location</p>
            <p className='text-light text-lg'>Tom Mboya Street, Nairobi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
