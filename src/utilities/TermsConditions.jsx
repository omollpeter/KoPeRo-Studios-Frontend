import React from 'react';

const TermsModal = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
      <div className='bg-slate-800 p-6 rounded-md shadow-md w-full max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Terms and Conditions</h2>
        <h2 className='text-lg underline font-bold'>1. Introduction</h2>
        <p>
          Welcome to Kopero Studios (“we”, “us”, “our”). These Terms and
          Conditions govern your use of our platform, which offers
          [services/products provided]. By accessing or using Kopero studios,
          you agree to comply with and be bound by these Terms. If you do not
          agree with any part of these terms, you must not use our platform.
        </p>
        <h2 className='text-lg underline font-bold mt-2'>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use our platform. By using Kopero
          studios, you confirm that you meet this age requirement.
        </p>
        <h2 className='text-lg underline font-bold mt-2'>
          3. Account Registration
        </h2>
        <p>
          You must create an account to access certain features of the platform.
          You agree to provide accurate and complete information during the
          registration process. You are responsible for maintaining the
          confidentiality of your account login credentials and are fully
          responsible for all activities that occur under your account.
        </p>

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

export default TermsModal;
