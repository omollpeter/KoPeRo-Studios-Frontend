import React, { useContext, useState, useEffect } from 'react';
import Sidebar, { SidebarItem } from '../Admin/Sidebar';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdBookOnline } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { CrewContext } from '../context/CrewContext';
import axios from 'axios';

const CrewAppointments = () => {
  const { crewId } = useParams();
  const [crewBookings, setCrewBookings] = useState([]);
  const { currentUser } = useContext(CrewContext);

  const token = localStorage.getItem('accessToken');

  const fetchBookings = async () => {
    try {
      const res = await axios.get('https://mady.tech/api/v1/booking/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filteredBookings = res.data.results.filter(
        (booking) => booking.crew === currentUser.full_name
      );
      setCrewBookings(filteredBookings);
      console.log(crewBookings);
    } catch (err) {
      console.error('Error fetching booking data: ', err);
    }
  };

  useEffect(() => {
    if (currentUser) {
      fetchBookings();
    }
  }, [currentUser]);

  return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem
          icon={<FiHome />}
          text='Dashboard'
          to={`/crew/dashboard/${crewId}`}
        />
        <SidebarItem
          icon={<CgProfile />}
          text='Profile'
          to={`/crew/profile/${crewId}`}
        />
        <SidebarItem icon={<MdBookOnline />} text={'Appointments'} active />
      </Sidebar>
      <div className='ml-10 mt-5 w-full'>
        <h1 className='text-3xl font-bold'>My Appointments</h1>
        <hr className='bg-slate-400 w-full mt-5' />
        <div>
          {crewBookings.length > 0 ? (
            crewBookings.map((booking) => (
              <div key={booking.id} className='border-b border-b-slate-400'>
                <div className='py-5 flex flex-col md:flex-row gap-6 items-start md:justify-between'>
                  <div>
                    <p className='text-light font-semibold text-lg'>
                      Client:{' '}
                      <span className='text-slate-400'>{booking.client}</span>
                    </p>
                    <p className='text-light font-semibold text-lg'>
                      Service:{' '}
                      <span className='text-slate-400'>
                        {booking.service_name}
                      </span>
                    </p>
                    <p className='text-sm md:text-base'>
                      <span className='font-medium'>Date & Time: </span>
                      {new Date(booking.date).toLocaleDateString()} -{' '}
                      {booking.time}
                    </p>
                  </div>
                  <div className='flex flex-row gap-2 md:flex-col'>
                    <button className='text-base text-slate-400 text-center sm:min-w-32 py-2 border border-slate-500 rounded-lg hover:bg-green-600 hover:text-light transition-all duration-300'>
                      Mark Completed
                    </button>
                    <button className='text-base text-slate-400 text-center sm:min-w-44 py-2 border border-slate-500 rounded-lg hover:bg-red-600 hover:text-light transition-all duration-300'>
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No bookings available for you at this time.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CrewAppointments;
