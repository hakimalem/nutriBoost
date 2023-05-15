import React from 'react';
import { CustomStepper } from '../components/checkout/Stepper';
import { MyStepper } from '../components/checkout/Stepper2';
import { OrderSummary } from '../components/checkout/OrderSummary';

export const Checkout = () => {
  return (
    <div className="px28 py-6 min-h-screen lg:px-52 md:px-20 px-10">
      <div className="flex justify-between">
        <div className='flex-1'>
          <CustomStepper />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
