import { useNavigate, useParams } from 'react-router-dom';
import { crewData } from '../constants/Crews_constants';
import StarRating from '../components/StarRating';
import { useEffect, useState } from 'react';
// import { InlineWidget } from 'react-calendly';

const Booking = () => {
  const { crewId } = useParams();
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [crewInfo, setCrewInfo] = useState({});
  const [crewSlots, setCrewSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const navigate = useNavigate();

  const fetchCrewInfo = async () => {
    const crewInfoData = crewData.find((crew) => crew.id === crewId);
    setCrewInfo(crewInfoData);
  };

  const getAvailableSlots = async () => {
    setCrewSlots([]);

    let today = new Date(); // current date

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(9);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        });
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 45);
      }

      setCrewSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchCrewInfo();
  }, [crewData, crewId]);

  useEffect(() => {
    getAvailableSlots();
  }, [crewInfo]);

  useEffect(() => {
    console.log(crewSlots);
  }, [crewSlots]);

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4'>
        <img
          src={crewInfo.image}
          alt={crewInfo.name}
          className='rounded-full w-52 hover:-translate-y-1 transition-all duration-300'
        />
        <div className='flex flex-col items-center md:items-start justify-center gap-2 md:gap-1'>
          <h1 className='text-2xl font-bold'>{crewInfo.name}</h1>
          <p className='text-slate-400 text-xl'>{crewInfo.cat}</p>
          <StarRating rating={crewInfo.stars} />
          {crewInfo.cat === 'Photographer' ? (
            <p className='text-base text-justify md:max-w-[750px]'>
              A Photographer's role involves taking photographs, processing
              images, and ensuring they meet the desired results. They also
              utilize editing techniques, maintain and operate photography
              equipment, and adhere to specifications for lighting, composition,
              and background.
            </p>
          ) : (
            <p>
              A Videographer's role involves taking videos, processing them, and
              ensuring they meet the desired results. They also utilize editing
              techniques, maintain and operate videography equipment, and adhere
              to specifications for lighting, composition, and background.
            </p>
          )}
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-slate-400'>
        <p className='text-base'>Select A Slot</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4 custom-scroll'>
          {crewSlots.length &&
            crewSlots.map((item, index) => (
              <div
                onClick={() => setSlotIndex(index)}
                className={`text-center py-3 min-w-20 rounded-lg cursor-pointer ${
                  slotIndex === index
                    ? 'bg-blue text-light'
                    : 'border border-blue'
                }`}
                key={index}
              >
                <p>{item[0] && weekDays[item[0].dateTime.getDay()]}</p>
                <p>{item[0] && item[0].dateTime.getDate()}</p>
              </div>
            ))}
        </div>
        <div className='flex items-center gap-3 w-full md:max-w-[700px] flex-wrap custom-scroll mt-4 md:mt-8 '>
          {crewSlots.length &&
            crewSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                className={`text-sm font-light flex-shrink-0 px-5 py-3 rounded-lg cursor-pointer ${
                  item.time === slotTime
                    ? 'bg-blue text-light'
                    : 'text-slate-400 border border-blue'
                }`}
                key={index}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        <button className='bg-blue text-light text-sm md:text-md font-semibold px-12 py-4 rounded-lg my-6'>
          Book Appointment
        </button>
      </div>

      {/*-------- calendly option -------*/}
      {/* <InlineWidget
        url='https://calendly.com/iganzaroy55/appointment'
        pageSettings={{
          backgroundColor: '#94a3b8',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#2563eb',
          textColor: '#ffff',
        }}
      /> */}
      <div className='flex flex-col gap-5 my-10'>
        <div className='flex flex-col gap-3 justify-center items-center'>
          <h1 className='relative font-bold before:absolute before:rounded-md before:-bottom-[0.1px] before:left-0 before:w-full before:h-[13px] before:bg-blue before:-z-20 hover:before:bg-pink transition duration-300 text-white text-4xl'>
            Related Crew
          </h1>
          <p className='font-medium'>
            You can also book with our other professionals
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10 justify-center items-center cursor-pointer '>
          {crewData
            .filter((crew) => crew.cat === crewInfo.cat)
            .slice(0, 4)
            .map((crew) => (
              <div
                onClick={() => navigate(`/booking/${crew.id}`)}
                key={crew.image}
                className='flex flex-col justify-center items-center hover:-translate-y-5 transition-all duration-300'
              >
                <img
                  src={crew.image}
                  alt={crew.name}
                  className='w-32 rounded-full relative'
                />
                <h3 className='text-light mt-4'>{crew.name.toUpperCase()}</h3>
                <p className='text-slate-400 text-sm'>{crew.cat}</p>
                <StarRating rating={crew.stars} />
              </div>
            ))}
        </div>
        <div className='flex items-center justify-center'>
          <button
            onClick={() => {
              navigate('/crew');
              scrollTo(0, 0);
            }}
            className='bg-blue text-sm font-semibold sm:text-base text-light px-8 py-3 rounded-md mt-6 hover:scale-105 transition-all'
          >
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
