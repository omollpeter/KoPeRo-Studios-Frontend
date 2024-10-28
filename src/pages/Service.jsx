import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ServicesPageData } from '../constants/constants';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';
import photographer_1 from '../assets/photographer_1.jpg';
import { AuthContext } from '../context/AuthContext';
import partner_1 from '../assets/partner_1.png';
import partner_2 from '../assets/partner_2.png';
import partner_3 from '../assets/partner_3.png';
import partner_4 from '../assets/partner_4.png';
import partner_5 from '../assets/partner_5.png';
import partner_6 from '../assets/partner_6.png';
import partner_7 from '../assets/partner_7.png';
import partner_8 from '../assets/partner_8.png';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const Services = () => {
  const navigate = useNavigate();
  const { crewId } = useParams();
  const toastShownRef = useRef(false);
  const currentUser = useContext(AuthContext);


  // State to store the selected service data
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState({
    Title: 'Welcome to Kopero Studios',
    Tag: 'Welcome to Kopero Studios',
    Description:
      'We specialize in delivering high-quality photography and videography services for all your needs. Select a service category to explore our tailored offerings, from candid street photography to elegant weddings and corporate events.',
    image: photographer_1,
    price: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://mady.tech/api/v1/services/`);
        setServices(res.data.results);
        console.log(services);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleClick = (service, e) => {
    e.preventDefault();

    setSelectedService({
      id: service.id,
      Title: service.name,
      Tag: service.tag,
      Description: service.description,
      image: service.image,
      price: service.rate_per_hour,
    });
    console.log(selectedService);
    setIsActive(service.title);
  };

  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-[70px] mb-[120px]'>
        <div className='bg-blue flex flex-col justify-center items-center py-[50px] w-full rounded-lg hover:bg-pink transition-all duration-300'>
          <FaHandshakeSimple className='text-light text-5xl -rotate-45 hover:-rotate-0 transition-all duration-300' />
          <h1 className='text-light text-4xl font-bold'>Our Services</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-[40px] justify-center w-full'>
          <div className='flex flex-col gap-3'>
            {services.map((service) => (
              <div
                className='flex justify-start items-center gap-3 w-[200px] text-lg text-light hover:text-blue'
                key={service.id}
              >
                <a
                  href='#cat'
                  onClick={(e) => handleClick(service, e)}
                  className={`${
                    isActive === service.name ? 'text-blue' : 'text-light'
                  } hover:text-blue transition-all duration-300`}
                >
                  {service.name}
                </a>
                <IoIosArrowForward
                  className={`${
                    isActive === service.name ? 'text-blue' : 'text-light'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className='flex flex-col lg:w-[800px] lg:h-[500px] m-auto rounded-lg relative overflow-hidden group shadow-md shadow-blue hover:shadow-none'>
            <img
              src={selectedService.image}
              className='absolute inset-0 w-full h-full object-cover rounded-lg  group-hover:rotate-1 hover:scale-105 transition-all duration-300 ease-in-out hover:skew-x-2 hover:skew-y-1'
              alt={selectedService.Tag}
            />
            <div className='absolute inset-0 bg-blue opacity-40 rounded-lg group-hover:opacity-70 group-hover:shadow-lg group-hover:shadow-blue/30 group-hover:rotate-1 group-hover:scale-105 transition-all duration-300 ease-in-out hover:skew-x-2 hover:skew-y-1'></div>
            <div className='relative flex flex-col gap-7 p-10'>
              <h1 className='text-3xl font-bold z-10 text-shadow' id='cat'>
                {selectedService.Tag}
              </h1>
              <div className='w-full h-full text-white top-[150px] left-[20px] z-10'>
                {selectedService.Description.split('.  ').map(
                  (paragraph, index) => (
                    <p key={index} className='mb-3 text-xl text-shadow'>
                      {paragraph}.
                    </p>
                  )
                )}
              </div>
              {selectedService.price && (
                <span className='text-light text-shadow'>
                  Rate Per Hour: $.{selectedService.price}
                </span>
              )}
              <button
                className='bg-blue text-white py-2 px-4 rounded w-[150px] group-hover:bg-slate-800'
                onClick={() => {
                  navigate(`/booking/${crewId}/${selectedService.id}`);
                  scrollTo(0, 0);
                }}
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-center gap-8 mb-[140px]'>
        <div className='flex justify-center items-center text-lg lg:text-2xl font-extrabold'>
          <h1>We have worked with 20+ organizations</h1>
        </div>
        <div className='flex overflow-hidden space-x-16 group'>
          <div className='flex space-x-16 animate-loop-scroll h-[70px] group-hover:paused'>
            <img
              loading='lazy'
              src={partner_1}
              alt='partner_1'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_2}
              alt='partner_2'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_3}
              alt='partner_3'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_4}
              alt='partner_4'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_5}
              alt='partner_5'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_6}
              alt='partner_6'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_7}
              alt='partner_7'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_8}
              alt='partner_8'
              className='max-w-none'
            />
          </div>
          <div className='flex space-x-16 animate-loop-scroll h-[70px] group-hover:paused aria-hidden:"true"'>
            <img
              loading='lazy'
              src={partner_1}
              alt='partner_1'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_2}
              alt='partner_2'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_3}
              alt='partner_3'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_4}
              alt='partner_4'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_5}
              alt='partner_5'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_6}
              alt='partner_6'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_7}
              alt='partner_7'
              className='max-w-none'
            />
            <img
              loading='lazy'
              src={partner_8}
              alt='partner_8'
              className='max-w-none'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
