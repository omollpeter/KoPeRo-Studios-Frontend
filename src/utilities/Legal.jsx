import React from 'react';

const Legal = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
      <div className='bg-slate-800 p-6 rounded-md shadow-md w-full max-w-md'>
        <h1 className='underline font-bold text-xl mb-2'>Legal Notice</h1>
        <p>
          By using our platform, you agree to comply with all applicable laws
          and regulations.
        </p>
        <ul className='list-disc p-3'>
          <li>
            <span className='font-bold'>Terms of Use: </span> Users must follow
            our platform's guidelines and terms.
          </li>
          <li>
            <span className='font-bold'>Liability: </span>
            We are not responsible for any third-party content shared by users.
          </li>
        </ul>
        <p>For detailed legal information, please consult our legal team.</p>
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

export default Legal;
