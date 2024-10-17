import React from 'react';

const Cookies = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
      <div className='bg-slate-800 p-6 rounded-md shadow-md w-full max-w-md'>
        <h1 className='underline font-bold text-xl mb-2'>Cookies Policy</h1>
        <p>We use cookies to enhance your experience on our platform.</p>
        <ul className='list-disc p-3'>
          <li>
            <span className='font-bold'>What are cookies?: </span> Small files
            stored on your device to track preferences.
          </li>
          <li>
            <span className='font-bold'>Why we use cookies: </span>
            To personalize your experience and improve our website’s
            performance.
          </li>
        </ul>
        <p>You can manage your cookie preferences in your browser settings.</p>
        <button
          className='mt-6 bg-blue text-white px-4 py-2 rounded'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Cookies;
