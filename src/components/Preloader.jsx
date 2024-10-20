import React from 'react';
import loadingGif from '../assets/preloader.gif';

const Preloader = () => {
  return (
    <div className='preloader-container flex justify-center items-center h-[100vh] bg-dark'>
      <img
        src={loadingGif}
        alt='Loading...'
        className='loading-gif w-[300px] h-auto'
      />
    </div>
  );
};

export default Preloader;
