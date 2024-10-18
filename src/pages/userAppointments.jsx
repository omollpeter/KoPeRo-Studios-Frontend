import { crewData } from '../constants/Crews_constants';

const UserAppointments = () => {
  return (
    <div>
      <p className='pb-3 mt-12 text-lg md:text-xl font-medium text-slate-400 border-b border-b-slate-600 mb-4'>
        My Appointments
      </p>
      <div>
        {crewData.slice(0, 4).map((item, index) => (
          <div
            className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-5 justify-center items-center border-b border-b-slate-600'
            key={index}
          >
            <div>
              <img
                className='w-28 md:w-40 rounded-full'
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className='flex-1 text-base text-slate-400'>
              <p className='text-light font-semibold'>{item.name}</p>
              <p>{item.cat}</p>
              <p className='text-light font-medium mt-1'>Address:</p>
              <p className='text-sm mt-1'>
                <span className='text-sm font-medium'>Date & Time: </span>25
                July, 2024 - 12:30pm
              </p>
            </div>
            <div></div>
            <div className='flex flex-col gap-2 justify end'>
              <button className='text-base text-slate-400 text-center sm:min-w-48 py-2 border  border-slate-500 rounded-sm hover:bg-blue hover:text-light transition-all duration-300'>
                Pay Now
              </button>
              <button className='text-base text-slate-400 text-center sm:min-w-48 py-2 border  border-slate-500 rounded-sm hover:bg-red-600 hover:text-light transition-all duration-300'>
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserAppointments;
