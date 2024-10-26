// import { useParams } from 'react-router-dom';
import { MdPeopleAlt } from 'react-icons/md';
// import { crewData } from '../constants/Crews_constants';
import StarRating from '../components/StarRating';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import profile from '../assets/profileImage.png';
import axios from 'axios';

const Crews = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [crewData, setCrewData] = useState([]);
  const [filterCrew, setFilteredCrew] = useState(crewData);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchCrewData = async () => {
      try {
        const res = await axios.get('https://mady.tech/api/v1/auth/crews/');
        setCrewData(res.data.results);
        setFilteredCrew(res.data.results);
      } catch (err) {
        console.error('Error fetching crew Data: ', err);
      }
    };
    fetchCrewData();
  });

  const applyFilter = (category) => {
    setFilteredCrew(crewData.filter((crew) => crew.category === category));
    setIsActive(category);
  };

  return (
    <div className='flex flex-col gap-20'>
      <div className='bg-blue flex flex-col justify-center items-center py-[20px] md:py-[50px] w-full rounded-lg hover:bg-pink transition-all duration-300'>
        <MdPeopleAlt
          className='text-light text-5xl hover:scale-105 transition-all duration-300 cursor-pointer'
          onClick={() => setFilteredCrew(crewData)}
        />
        <h1 className='text-light text-4xl font-bold'>Our Crew</h1>
        <p className='text-light text-lg'>
          Browse through our experienced Crew.
        </p>
      </div>
      <div className='flex flex-col  justify-center items-center md:items-start md:flex-row gap-20'>
        <div>
          <p
            onClick={() => applyFilter('Photographer')}
            className={`cursor-pointer text-lg hover:text-blue ${
              isActive === 'Photographer' ? 'text-blue' : 'text-light'
            }`}
          >
            Photographers
          </p>
          <p
            onClick={() => applyFilter('Videographer')}
            className={`cursor-pointer text-lg hover:text-blue ${
              isActive === 'Videographer' ? 'text-blue' : 'text-light'
            }`}
          >
            Videographers
          </p>
        </div>
        <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-y-6 md:max-w-4xl justify-center items-center cursor-pointer w-full'>
          {filterCrew.map((crew) => (
            <div
              onClick={() => {
                currentUser
                  ? navigate(`/services/${crew.id}`)
                  : navigate('/login');
              }}
              key={crew.image}
              className='flex flex-col justify-center items-center hover:-translate-y-5 transition-all duration-300'
            >
              <img
                src={crew.image || profile}
                alt={crew.full_name}
                className='w-28 md:w-40 rounded-full relative'
              />
              <h3 className='text-light mt-4'>
                {crew.full_name.toUpperCase()}
              </h3>
              <p className='text-slate-400 text-sm'>{crew.cat}</p>
              <StarRating rating={crew.stars} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Crews;
