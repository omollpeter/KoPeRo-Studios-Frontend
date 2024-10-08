import camera_1 from '../assets/camera_1.svg';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap px-6 md:px-10 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[4vw]'>
        <p className='text-4xl md:text-5xl lg:text-6xl text-light font-semibold leading-tight md:leading-tight lg:leading-tight'>
          <i>
            Your <span className='text-blue'>Moments</span>, <br />{' '}
            <span className='text-blue'>Our</span> Lens
          </i>
        </p>
        <p>
          We capture every moment in your life wherever,{' '}
          <br className='hidden sm:block' />
          whenever and however you need it in just few steps.
        </p>
        <div className='flex gap-5 justify-center'>
          <a
            className='bg-blue px-8 py-3 rounded-md text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'
            href=''
          >
            Book Session
          </a>
          <a
            className='border-2 border-blue rounded-md px-8 text-sm py-3 m-auto md:m-0 hover:bg-blue hover:text-light transition-all duration-300'
            href=''
          >
            About Us
          </a>
        </div>
      </div>
      <div className='md:w-1/2 relative'>
        <img
          className='w-full md:absolute bottom-0 h-auto rounded-lg hover:-translate-y-1 duration-300'
          src={camera_1}
          alt=''
        />
      </div>
    </div>
  );
};

export default Hero;
