import React, { useEffect, useState } from 'react';
import Sidebar, { SidebarItem } from '../Admin/Sidebar';
import { useParams } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { MdSpaceDashboard } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { MdBookOnline } from 'react-icons/md';
import axios from 'axios';
import profileImage from '../assets/profileImage.png';

const CrewDashboard = () => {
  const { crewId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserdata] = useState(null);

  const fetchUserProfile = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.log('No access token found');
      return;
    }

    try {
      const res = await axios.get(
        `https://mady.tech/api/v1/auth/crews/${crewId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      setUserdata(res.data);
    } catch (error) {
      console.error(`Error getting user profile:`, error);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, [crewId]);

  return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem icon={<FiHome />} text='Dashboard' active />
        <SidebarItem
          icon={<CgProfile />}
          text='Profile'
          to={`/crew/profile/${crewId}`}
        />
        <SidebarItem
          icon={<MdBookOnline />}
          text={'Appointments'}
          to={`/crew/appointments/${crewId}`}
        />
      </Sidebar>
      <div className='ml-10 mt-5 w-full'>
        <div className='bg-blue flex flex-col justify-center items-center py-[50px] w-full rounded-lg hover:bg-pink transition-all duration-300'>
          <MdSpaceDashboard className='text-light text-5xl  hover:-rotate-90 transition-all duration-300' />
          <h1 className='text-light text-4xl font-bold'>Dashboard</h1>
        </div>
        <div className='mt-5 w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div
              className='bg-sky-700 p-6 rounded-lg shadow-lg hover:bg-sky-600 transition-all duration-300'
              onClick={() => navigate(`/crew/profile/${crewId}`)}
            >
              <h2 className='text-white text-xl font-bold md:mb-3'>
                Profile Information
              </h2>
              <p className='text-white'>Name: {userData?.full_name || 'N/A'}</p>
              <p className='text-white'>
                Username: {userData?.username || 'N/A'}
              </p>
              <p className='text-white'>
                Category: {userData?.category || 'N/A'}
              </p>
            </div>

            <div
              className='bg-pink p-6 rounded-lg shadow-lg hover:bg-fuchsia-400 transition-all duration-300'
              onClick={() => navigate(`/crew/profile/${crewId}`)}
            >
              <h2 className='text-white text-xl font-bold md:mb-3'>
                Contact Details
              </h2>
              <p className='text-white'>Email: {userData?.email || 'N/A'}</p>
              <p className='text-white'>Phone: {userData?.phone || 'N/A'}</p>
            </div>

            <div
              className='bg-violet-600 p-6 rounded-lg shadow-lg hover:bg-violet-500 transition-all duration-300'
              onClick={() => navigate(`/crew/appointments/${crewId}`)}
            >
              <h2 className=' md:mb-3 text-white text-xl font-bold'>Status</h2>
              <p className='text-white'>
                Active: {userData?.is_active ? 'Yes' : 'No'}
              </p>
              <p className='text-white'>
                Sessions Booked: {userData?.sessions_booked?.length || 0}
              </p>
            </div>

            <div
              className='bg-teal-600 p-6 rounded-lg shadow-lg hover:bg-teal-500 transition-all duration-300'
              onClick={() => navigate(`/crew/profile/${crewId}`)}
            >
              <h2 className='text-white text-xl font-bold'>
                Ratings & Profile Image
              </h2>
              <p className='text-white'>
                Rating: {userData?.average_rating || 'N/A'}
              </p>
              <img
                src={userData?.image || profileImage}
                alt='Crew Member'
                className='mt-4 w-20 h-20 rounded-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrewDashboard;
