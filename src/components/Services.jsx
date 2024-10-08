import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination } from 'swiper/modules';
import { FaArrowRightLong } from 'react-icons/fa6';
import { servicesData } from '../constants/constants';

const Services = () => {
  return (
    <div>
      <div className=' flex items-center justify-center flex-col h-[600px] md:h-[800px] gap-7'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <h1 className='font-bold text-white text-4xl'>What We Offer</h1>
          <p className='font-medium'>We Are The Best In Town</p>
        </div>
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='max-w-[90%] lg:max-w-[80%] py-8'
        >
          {servicesData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className='flex flex-col gap-6 mb-20 group relative shadow-lg shadow-blue hover:shadow-md text-light rounded-xl px-6 py-8 h-[250px] w-[150px] lg:h-[400px] lg:w-[300px] overflow-hidden cursor-pointer'>
                <div
                  className='absolute inset-0 bg-cover bg-center group-hover:shadow-lg group-hover:shadow-blue/30 group-hover:rotate-1 group-hover:scale-105 transition-all duration-300 ease-in-out hover:skew-x-2 hover:skew-y-1'
                  style={{ backgroundImage: `url(${item.backgroundImage})` }}
                />
                <div className='absolute inset-0 bg-blue opacity-10 group-hover:opacity-40 group-hover:shadow-lg group-hover:shadow-blue/30 group-hover:rotate-1 group-hover:scale-105 transition-all duration-300 ease-in-out hover:skew-x-2 hover:skew-y-1' />
                <div className='relative flex flex-col gap-3'>
                  <item.icon className='text-white group-hover:text-pink w-[32px] h-[32px]' />
                  <h1 className='text-xl lg:text-3xl font-bold text-shadow'>
                    {item.title}
                  </h1>
                  <p className='hidden md:block lg:block lg:text-[18px] font-medium text-shadow'>
                    {item.content}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-center items-center gap-3 cursor-pointer'>
          <a className='text-blue md:hover:underline decoration-solid decoration-blue transition-all'>
            Explore More
          </a>
          {<FaArrowRightLong className='text-blue hover:text-pink' />}
        </div>
      </div>
    </div>
  );
};

export default Services;
