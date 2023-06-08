import React from 'react';
import { RiBankCardLine, RiPaypalLine } from 'react-icons/ri';
import { BsCashCoin } from 'react-icons/bs';
import PayPalButtonComponent from './Paypal';

export const Payment = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('card');

  const handlePaymentSuccess = (details, data) => {
    alert('Payment successful!');
  };

  const handlePaymentError = (err) => {
    console.log(err);
  };

  const handlePaymentCancel = (data) => {
    console.log(data);
  };

  let paymentUI;
  if (paymentMethod === 'card') {
    paymentUI = (
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="text-xs text-text-gray" htmlFor="cardNumber">
            Card Number:
          </label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            required
            className="focus:outline-none border-text-gray border px-3 py-2 rounded-sm w-full"
          />
        </div>
        <div>
          <label className="text-xs text-text-gray" htmlFor="holderName">
            Holder name :
          </label>
          <input
            type="text"
            id="holderName"
            name="holderName"
            required
            className="focus:outline-none border-text-gray border px-3 py-2 rounded-sm w-full"
          />
        </div>
        <div>
          <label className="text-xs text-text-gray" htmlFor="expiryDate">
            Expiry Date:
          </label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            required
            className="focus:outline-none border-text-gray border px-3 py-2 rounded-sm w-full"
          />
        </div>
        <div>
          <label className="text-xs text-text-gray" htmlFor="cvvCode">
            CVV Code:
          </label>
          <input
            type="text"
            id="cvvCode"
            required
            name="cvvCode"
            className="focus:outline-none border-text-gray border px-3 py-2 rounded-sm w-full"
          />
        </div>
      </div>
    );
  } else if (paymentMethod === 'paypal') {
    paymentUI = (
      <div className="mt-10">
        paypal
        <PayPalButtonComponent
          amount={10}
          onSuccess={handlePaymentSuccess}
          onError={handlePaymentError}
          onCancel={handlePaymentCancel}
        />
      </div>
    );
  } else {
    paymentUI = <div className="mt-10">invoice</div>;
  }

  return (
    <div className="">
      <h2 className="text-2xl">Select method</h2>
      <div className="flex gap-10 mt-4">
        <div
          className={`${
            paymentMethod === 'card'
              ? 'text-[#F8A300] border-[#F8A300] bg-[#F8A300] bg-opacity-10'
              : ''
          } flex gap-2 item-center border p-4 hover:bg-[#F8A300] hover:bg-opacity-10 cursor-pointer`}
          onClick={() => setPaymentMethod('card')}
        >
          <div className="flex justify-center items-center">
            <RiBankCardLine />
          </div>
          <p>Credit Card</p>
        </div>
        <div
          className={`${
            paymentMethod === 'paypal'
              ? 'text-[#F8A300] border-[#F8A300] bg-[#F8A300] bg-opacity-10'
              : ''
          } flex gap-2 item-center border p-4 hover:bg-[#F8A300] hover:bg-opacity-10 cursor-pointer`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <div className="flex justify-center items-center">
            <RiPaypalLine />
          </div>
          <p>Paypal</p>
        </div>
        <div
          className={`${
            paymentMethod === 'invoice'
              ? 'text-[#F8A300] border-[#F8A300] bg-[#F8A300] bg-opacity-10'
              : ''
          } flex gap-2 item-center border p-4 hover:bg-[#F8A300] hover:bg-opacity-10 cursor-pointer`}
          onClick={() => setPaymentMethod('invoice')}
        >
          <div className="flex justify-center items-center">
            <BsCashCoin />
          </div>
          <p>Pay on invoice</p>
        </div>
      </div>

      {paymentUI}
    </div>
  );
};
