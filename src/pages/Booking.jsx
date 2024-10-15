import { useParams } from 'react-router-dom';
import { crewData } from '../constants/Crews_constants';
import StarRating from '../components/StarRating';
import { useEffect, useState } from 'react';

const Booking = () => {
  const { crewId } = useParams();

  const [crewInfo, setCrewInfo] = useState({});

  const fetchCrewInfo = async () => {
    const crewInfoData = crewData.find((crew) => crew.id === crewId);
    setCrewInfo(crewInfoData);
  };

  useEffect(() => {
    fetchCrewInfo();
  }, [crewData, crewId]);

  return (
    <div>
      <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-4'>
        <img
          src={crewInfo.image}
          alt={crewInfo.name}
          className='rounded-full w-52 hover:-translate-y-1 transition-all duration-300'
        />
        <div className='flex flex-col items-center md:items-start justify-center gap-2 md:gap-1'>
          <h1 className='text-2xl font-bold'>{crewInfo.name.toUpperCase()}</h1>
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
    </div>
  );
};

export default Booking;
