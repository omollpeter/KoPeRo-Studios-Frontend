import React from 'react';

const TopCrew = () => {
  return (
    <div>
      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='relative font-bold before:absolute before:rounded-md before:-bottom-[0.1px] before:left-0 before:w-full before:h-[13px] before:bg-blue before:-z-20 hover:before:bg-pink transition duration-300 text-white text-4xl'>
          Our Top Crew
        </h1>
        <p className='font-medium'>Have a glance at our Best</p>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default TopCrew;
