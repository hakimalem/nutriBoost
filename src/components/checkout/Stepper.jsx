import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import ComboBox from './ComboBox';
import { wilayas } from '../../data/data';
import { Payment } from './Payment';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import { Loading } from '../common/Loading';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

function CustomStepIcon(props) {
  const { active, completed } = props;
  const color = active || completed ? 'green' : 'gray';
  return (
    <div
      className={`flex ${
        active || completed ? 'border-primary' : 'border-gray-500'
      }} justify-center border-[2px] p-2 rounded-full `}
    >
      <div
        className={`${
          active || completed ? 'bg-primary' : 'bg-text-gray'
        } h-4 w-4 rounded-full `}
      ></div>
    </div>
  );
}

export const CustomStepper = ({ cart, totalPrice }) => {
  const [activeStep, setActiveStep] = React.useState(1);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  root;
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(1);
  };

  const [userData = apiData, isLoading, error] = useFetch('/api/users/getMe');
  const user = userData?.data;
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [state, setState] = useState('16 - Alger');
  const [success, setSuccess] = useState(false);
  const { auth } = useAuth();
  console.log(auth.user);
  const navigate = useNavigate();

  console.log({ state });

  const createOrder = async () => {
    await axios
      .post(
        '/api/orders',
        {
          user: auth.user._id,
          total: totalPrice,
          zip: '13004',
          address,
          state,
          city,
          country: 'Algeria',
          date: new Date(),
          products: cart.map((item) => ({
            product_id: item.product_id,
            quantity: item.quantity,
          })),
        },
        {
          headers: {
            Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setTimeout(() => {
          navigate('/succesPayment');
          console.log('Delayed for 1 second.');
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      {success ? (
        <Loading />
      ) : (
        <>
          {isLoading ? (
            <div
              role="status"
              class="max-w-md mt-20 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
            >
              <div class="flex items-center justify-between">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <div class="flex items-center justify-between pt-4">
                <div>
                  <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                  <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </div>
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <Stepper activeStep={activeStep} orientation="vertical">
              <Step active={true}>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  Customer
                </StepLabel>
                <StepContent>
                  <div className="border flex justify-between px-4 py-6 items-center w-[150%]">
                    <div className="flex items-center gap-5 ">
                      <img
                        className="w-16 rounded-full"
                        src="../src/assets/images/mustafa.png"
                        alt=""
                      />
                      <p>{user?.email}</p>
                    </div>
                    <button className="h-full bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Sign out
                    </button>
                  </div>
                </StepContent>
              </Step>
              <Step>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  Shipping
                </StepLabel>
                <StepContent>
                  <div className="w-[150%] flex flex-col gap-3">
                    <div>
                      <div className="flex flex-col gap-1">
                        <label
                          className="text-xs text-text-gray"
                          htmlFor="street"
                        >
                          Street address
                        </label>
                        <input
                          className="focus:outline-none border-text-gray border px-3 py-[15px] rounded-sm w-full"
                          id="street"
                          name="street"
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          required
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <div>
                          <label
                            className="text-xs text-text-gray"
                            htmlFor="city"
                          >
                            City
                          </label>
                          <input
                            className="focus:outline-none border-text-gray border px-3 py-[15px] rounded-sm w-full"
                            id="city"
                            name="city"
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                          />
                        </div>
                        <div className="">
                          <label
                            className="text-xs text-text-gray"
                            htmlFor="city"
                          >
                            State
                          </label>
                          <select
                            name="state"
                            id="state"
                            className="focus:outline-none bg-white border-text-gray border px-3 py-[15px] rounded-sm w-full"
                            required
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                          >
                            {wilayas.map((wilaya) => (
                              <option value={wilaya.label}>
                                {wilaya.label}
                              </option>
                            ))}
                          </select>{' '}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={handleNext}
                      className="h-full  bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    >
                      Next
                    </button>
                  </div>
                </StepContent>
              </Step>
              <Step>
                <StepLabel StepIconComponent={CustomStepIcon}>
                  Payment
                </StepLabel>
                <StepContent>
                  <div className="w-[150%]">
                    <Payment />
                    <div className="flex justify-between mt-8">
                      <button
                        className="flex items-center gap-3 hover:scale-110 hover:underline duration-200"
                        onClick={handleBack}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-arrow-left"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                          />
                        </svg>
                        <span>Back</span>
                      </button>
                      <button
                        onClick={() => {
                          createOrder();
                        }}
                        className="h-full  bg-primary hover:bg-green-400 active:bg-green-500 text-white font-poppinsBold py-2 px-4 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      >
                        Confirm & Pay
                      </button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            </Stepper>
          )}
          {/* {activeStep === 2 && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
            </Button>
        </Paper>
      )} */}
        </>
      )}
    </Box>
  );
};

//  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
//    Back
//  </Button>;
