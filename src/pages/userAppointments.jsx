import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const UserAppointments = () => {
  const [crewData, setCrewData] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const [BookingInfo, setBookingInfo] = useState([]);

  const token = localStorage.getItem('accessToken');

  const fetchBookingInfo = async () => {
    try {
      const res = await axios.get('https://mady.tech/api/v1/booking/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setBookingInfo(res.data.results);
      console.log()
    } catch (err) {
      console.error('Error fetching booking data: ', err);
    }
  };

  const fetchCrewInfo = async () => {
    try {
      const res = await axios.get('https://mady.tech/api/v1/auth/crews/');
      setCrewData(res.data.results);
    } catch (err) {
      console.error('Error fetching crew data: ', err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchBookingInfo();
      fetchCrewInfo();
    }
  }, [currentUser]);

  return (
    <div>
      <p className='pb-3 mt-12 text-lg md:text-xl font-medium text-slate-400 border-b border-b-slate-800 mb-4'>
        My Appointments
      </p>
      <div>
        {crewData.map((crew, index) => {
          // Filter bookings for the current crew member
          const crewBookings = BookingInfo.filter(
            (booking) => booking.crew === crew.full_name
          );

          // If no bookings for this crew member, return null
          if (crewBookings.length === 0) return null;

          return (
            <div key={index} className='border-b border-b-slate-400'>
              <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-5 justify-center items-center'>
                <div>
                  <img
                    className='w-28 md:w-40 rounded-full'
                    src={crew.image}
                    alt={crew.full_name}
                  />
                </div>
                <div className='flex-1 text-base text-slate-400'>
                  <p className='text-light font-semibold text-lg'>{crew.full_name}</p>
                  <p>{crew.category}</p>
                </div>
              </div>

              {/* Display each booking as a separate appointment */}
              {crewBookings.map((booking, bookingIndex) => (
                <div key={bookingIndex} className='py-3 flex flex-col md:flex-row gap-9 '>
                  <div>
                    <p className='text-light font-medium text-lg'>
                      Service: <span className='text-slate-400'>{booking.service_name}</span> 
                    </p>
                    <p className='text-sm md:text-base'>
                      <span className='font-medium'>Date & Time: </span>
                      {new Date(booking.date).toLocaleDateString()} -{' '}
                      {booking.time}
                    </p>
                  </div>
                  <div className='flex flex-row gap-2'>
                    <button className='text-base text-slate-400 text-center sm:min-w-32 py-2 border border-slate-500 rounded-lg  hover:bg-blue hover:text-light transition-all duration-300'>
                      Pay Now
                    </button>
                    <button className='text-base text-slate-400 text-center sm:min-w-44 py-2 border border-slate-500 rounded-lg hover:bg-red-600 hover:text-light transition-all duration-300'>
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserAppointments;
