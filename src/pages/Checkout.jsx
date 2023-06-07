import React, { useEffect, useState } from 'react';
import { CustomStepper } from '../components/checkout/Stepper';
import { MyStepper } from '../components/checkout/Stepper2';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

export const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [error, setError] = useState(null);

  const { auth, setAuth } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios('/api/users/cart/displayCart', {
          headers: {
            Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        });
        setCart(data.cart);
        setTotalPrice(data.totalPrice);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px28 py-6 min-h-screen lg:px-52 md:px-20 px-10">
      <div className="flex justify-between">
        <div className="flex-1">
          <CustomStepper cart={cart} />
        </div>
        <div>
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
};
