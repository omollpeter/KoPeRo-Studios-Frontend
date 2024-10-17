import React from 'react';

const FAQ = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
      <div className='bg-slate-800 p-6 rounded-md shadow-md w-full max-w-md'>
        <h1 className='underline font-bold text-xl mb-2'>
          Frequently Asked Questions
        </h1>
        <ul className='list-decimal p-3'>
          <li>
            <span className='font-bold'>How do I sign up?</span> <br /> Click on
            the "Sign Up" button and follow the instructions.
          </li>
          <li>
            <span className='font-bold'>How can I reset my password?</span>{' '}
            <br />
            Go to the login page and click "Forgot Password" to receive a reset
            link.
          </li>
          <li>
            <span className='font-bold'>Is my personal data safe?</span> <br />
            Yes, we follow strict security protocols to protect your
            information.
          </li>
        </ul>
        <p>If you have any other questions, reach out to our support team.</p>
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

export default FAQ;
