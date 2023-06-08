import React from 'react';

const PaymentSuccessPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <svg
          className="w-16 h-16 mx-auto text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="mt-4 text-2xl font-semibold text-center text-gray-800">
          Payment Successful!
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Thank you for your payment. Your transaction has been processed
          successfully.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
