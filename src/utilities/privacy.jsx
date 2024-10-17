import React from 'react';

const privacy = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
      <div className='bg-slate-800 p-6 rounded-md shadow-md w-full max-w-md'>
        <h1 className='underline font-bold text-xl mb-2'>Privacy Policy</h1>
        <p className='mb-1'>
          We value your privacy and are committed to protecting your personal
          information. This policy outlines how we collect, use, and safeguard
          your data.
        </p>
        <ul className='list-disc p-3'>
          <li>
            <span className='font-bold'>Information Collection:</span> We
            collect personal information when you sign up, such as your name and
            email.
          </li>
          <li>
            <span className='font-bold'>Use of Information:</span> Your
            information is used to improve our services and communicate with
            you.
          </li>
          <li>
            <span className='font-bold'>Data Protection:</span> We take
            necessary measures to protect your data from unauthorized access.
          </li>
        </ul>
        <p>For more details, feel free to contact us.</p>
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

export default privacy;
