import { useState } from 'react';
import { ServicesPageData } from '../constants/constants';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import photographer_1 from '../assets/photographer_1.jpg';

const Services = () => {
  // State to store the selected service data
  const [selectedService, setSelectedService] = useState({
    Title: 'Welcome to Kopero Studios',
    Description:
      'We specialize in delivering high-quality photography and videography services for all your needs. Select a service category to explore our tailored offerings, from candid street photography to elegant weddings and corporate events.',
    image: photographer_1,
  });

  const handleClick = (categoryName, e) => {
    e.preventDefault();

    const service = ServicesPageData.find(
      (service) => service.Category === categoryName
    );

    if (service) {
      setSelectedService({
        Title: service.Title,
        Description: service.Description,
        image: service.image,
      });
    }
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-[70px]'>
        <div className='bg-blue flex flex-col justify-center items-center py-[50px] w-full rounded-lg'>
          <FaHandshakeSimple className='text-light text-5xl -rotate-45' />
          <h1 className='text-light text-4xl font-bold'>Our Services</h1>
        </div>
        <div className='flex gap-[40px] justify-center w-full'>
          <div className='flex flex-col gap-3'>
            {ServicesPageData.map((service) => (
              <div
                className='flex justify-start items-center gap-3 w-[200px]'
                key={service.Category}
              >
                <a href='#' onClick={(e) => handleClick(service.Category, e)}>
                  {service.Category}
                </a>
                <IoIosArrowForward />
              </div>
            ))}
          </div>
          <div className='flex flex-col w-[800px] h-[500px] m-auto rounded-lg relative overflow-hidden'>
            <img
              src={selectedService.image}
              className='absolute inset-0 w-full h-full object-cover rounded-lg'
              alt={selectedService.Title}
            />
            <div className='absolute inset-0 bg-blue opacity-40 rounded-lg'></div>
            <div className='relative flex flex-col gap-7 p-10'>
              <h1 className='text-3xl font-bold z-10 text-shadow'>
                {selectedService.Title}
              </h1>
              <div className='w-full h-full text-white top-[150px] left-[20px] z-10'>
                {selectedService.Description.split('.  ').map(
                  (paragraph, index) => (
                    <p key={index} className='mb-8 text-xl text-shadow'>
                      {paragraph}.
                    </p>
                  )
                )}
              </div>
              <button className='bg-blue text-white py-2 px-4 rounded w-[150px]'>
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
