import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIos,
} from 'react-icons/md';
import { testimonialsData } from '../constants/Testimonials_consts';

const Testimonials = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='relative font-bold before:absolute before:rounded-md before:-bottom-[0.1px] before:left-0 before:w-full before:h-[13px] before:bg-blue before:-z-20 hover:before:bg-pink transition duration-300 text-white text-4xl'>
          Testimonials
        </h1>
        <p className='font-medium'>Read what others have to say</p>
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
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className='max-w-[90%] lg:max-w-[80%] py-16'
        id='services'
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.name}>
            <div className='flex flex-col gap-6 mb-5 group relative text-light rounded-xl px-6 py-8 h-[250px] w-[150px] lg:h-[300px] lg:w-[300px] cursor-pointer '>
              <img
                className='absolute rounded-[100%] object-cover w-[70px] -top-[50px] left-[40px] lg:left-[120px] z-10 grayscale group-hover:grayscale-0'
                src={item.image}
                alt={item.title}
              />
              <div className='absolute inset-0 bg-blue opacity-10 group-hover:opacity-40 rounded-lg group-hover:shadow-blue/30  transition-all duration-300 ease-in-out' />
              <div className='relative flex flex-col h-full justify-between'>
                <p className='text-sm lg:text-lg text-shadow text-slate-400 group-hover:text-slate-200'>
                  {item.content}
                </p>
                <p className='lg:text-[18px] text-sm font-medium text-shadow text-slate-200 text-end'>
                  {item.name}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className='flex gap-4 justify-center'>
          <button className='swiper-button-prev'>
            <MdOutlineArrowBackIos className='text-white hover:text-pink w-[35px] h-[35px]' />
          </button>
          <button className='swiper-button-next'>
            <MdOutlineArrowForwardIos className='text-white hover:text-pink w-[35px] h-[35px]' />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
