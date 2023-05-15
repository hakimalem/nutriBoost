import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const PayPalButtonStyle = {
  base: 'w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  disabled: 'opacity-50 cursor-not-allowed',
  loading: 'bg-blue-700',
};

export default function PayPalButtonComponent(props) {
  return (
    <PayPalButton
      style={PayPalButtonStyle}
      options={{
        clientId: 'YOUR_PAYPAL_CLIENT_ID',
        currency: 'USD',
        intent: 'capture',
      }}
      amount={props.amount}
      onSuccess={props.onSuccess}
      onError={props.onError}
      onCancel={props.onCancel}
    />
  );
}
