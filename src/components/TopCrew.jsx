import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import profile from '../assets/profileImage.png';
import axios from 'axios';

const TopCrew = () => {
  const [crewData, setCrewData] = useState([]);
  const navigate = useNavigate();
  const average_rating = 5;

  useEffect(() => {
    const fetchCrewData = async () => {
      try {
        const res = await axios.get('https://mady.tech/api/v1/auth/crews/');
        setCrewData(res.data.results);
      } catch (err) {
        console.error('Error fetching crew Data: ', err);
      }
    };
    fetchCrewData();
  });

  const handleError = (event) => {
    event.target.src = profile;
  };

  return (
    <div className='flex flex-col gap-5 mb-10'>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='relative font-bold before:absolute before:rounded-md before:-bottom-[0.1px] before:left-0 before:w-full before:h-[13px] before:bg-blue before:-z-20 hover:before:bg-pink transition duration-300 text-white text-4xl'>
          Our Top Crew
        </h1>
        <p className='font-medium'>Have a glance at our Best</p>
      </div>
      <div className='grid md:grid-cols-6 sm:grid-cols-2 gap-2 justify-center items-center cursor-pointer '>
        {crewData.slice(0, 6).map((crew) => (
          <div
            onClick={() => {
              navigate(`/booking/${crew.id}`);
              scrollTo(0, 0);
            }}
            key={crew.image}
            className='flex flex-col justify-center items-center hover:-translate-y-5 transition-all duration-300'
          >
            <img
              rel='preload'
              src={crew.image || profile}
              alt={crew.full_name}
              className='w-32 rounded-full relative'
            />
            <h3 className='text-light mt-4'>{crew.full_name.toUpperCase()}</h3>
            <p className='text-slate-400 text-sm'>{crew.category}</p>
            <StarRating rating={average_rating} />
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
  );
};

export default TopCrew;
