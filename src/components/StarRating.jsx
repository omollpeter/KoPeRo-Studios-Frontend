import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          size={20}
          color={index < rating ? '#ffc107' : '#e4e5e9'} // Yellow for filled stars
        />
      ))}
    </div>
  );
};

export default StarRating;
