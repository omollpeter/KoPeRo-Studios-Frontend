import { useNavigate, useParams } from 'react-router-dom';
import StarRating from '../components/StarRating';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'sonner';
// import { InlineWidget } from 'react-calendly';

const Booking = () => {
  const { crewId, serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(crewId);
    if (!crewId) {
      toast.error('Please select a crew member to book an appointment.');
      navigate('/crew');
    }
  }, [crewId, navigate]);

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [crewInfo, setCrewInfo] = useState({});
  const [crewData, setCrewData] = useState([]);
  const [serviceInfo, setServiceInfo] = useState({});
  const [crewSlots, setCrewSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const { currentUser } = useContext(AuthContext);

  const fetchCrewInfo = async () => {
    try {
      const res = await axios.get('https://mady.tech/api/v1/auth/crews/');
      setCrewData(res.data.results);
      const crewInfoData = res.data.results.find((crew) => crew.id === crewId);
      setCrewInfo(crewInfoData);
      console.log(crewInfo);
    } catch (err) {
      console.error('Error fetching crew Data: ', err);
    }
  };

  const fetchServiceInfo = async () => {
    try {
      const res = await axios.get('https://mady.tech/api/v1/services/');
      setServiceInfo(res.data.results);
    } catch (err) {
      console.error('Error fetching crew Data: ', err);
    }
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
          hourCycle: 'h23',
        });

        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();

        const slotDate = day + '_' + month + '_' + year;
        const slotTime = formattedTime;

        const isAvailable =
          crewInfo.sessionsBooked &&
          crewInfo.sessionsBooked[slotDate] &&
          crewInfo.sessionsBooked[slotDate].includes(slotTime)
            ? false
            : true;

        if (isAvailable) {
          timeSlots.push({
            dateTime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 60);
      }

      setCrewSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    if (!currentUser) {
      toast.error('Log in to book an appointment');
      navigate('/login');
      return;
    }
    const token = localStorage.getItem('accessToken');
    const clientId = currentUser.id;

    try {
      const date = crewSlots[slotIndex][0].dateTime;
      // let day = date.getDate();
      // let month = date.getMonth() + 1;
      // let year = date.getFullYear();
      // const slotDate = day + '_' + month + '_' + year;

      const finalDate = date.toISOString().split('T')[0];
      // const finalTime = date.toTimeString().split(' ')[0].slice(0, 5);
      const finalTime = slotTime;
      console.log(finalTime);

      const res = await axios.post(
        'https://mady.tech/api/v1/booking/',
        {
          crew: crewId,
          client: clientId,
          service: serviceId,
          date: finalDate,
          time: finalTime,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      toast.success('Appointment booked successfully');
      navigate('/user-appointments');
    } catch (error) {
      console.log(error);
      toast.error('Failed to book appointment');
    }
  };

  useEffect(() => {
    fetchCrewInfo();
  }, [crewId]);

  useContext(() => {
    fetchServiceInfo();
  }, [serviceId]);

  useEffect(() => {
    getAvailableSlots();
  }, [crewInfo]);

  useEffect(() => {
    console.log(crewSlots);
  }, [crewSlots]);

  if (!crewInfo) {
    return <div>Loading</div>; // Or a loading indicator
  }

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4'>
        <img
          src={crewInfo.image}
          alt={crewInfo.full_name}
          className='rounded-full w-52 hover:-translate-y-1 transition-all duration-300'
        />
        <div className='flex flex-col items-center md:items-start justify-center gap-2 md:gap-1'>
          <h1 className='text-2xl font-bold'>{crewInfo.full_name}</h1>
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
        <button
          onClick={bookAppointment}
          className='bg-blue text-light text-sm md:text-md font-semibold px-12 py-4 rounded-lg my-6'
        >
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
                  alt={crew.full_name}
                  className='w-32 rounded-full relative'
                />
                <h3 className='text-light mt-4'>
                  {crew.full_name.toUpperCase()}
                </h3>
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
