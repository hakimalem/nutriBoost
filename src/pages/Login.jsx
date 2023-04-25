import React from 'react';
import { Button, ButtonLight } from '../components/form/auth/Button';
import { Input } from '../components/form/auth/Input';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    //code
  };
  return (
    <div className="flex justify-center items-center h-screen bg-login bg-cover">
      <div className="bg-[#fff] p-10 rounded-[20px] flex flex-col  gap-6 items-center ">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-[16px] text-[#5A5A5D]">Welcome Back</h2>
          <h1 className="text-[32px] font-medium">Login to your account</h1>
        </div>
        <form
          action=""
          className="flex flex-col gap-3 w-[450px]"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-grey text-sm">
              Email
            </label>
            <Input id="email" placeholder="Enter your email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-grey text-sm">
              Password
            </label>
            <Input id="password" placeholder="Enter your password" />
          </div>
          <div className="flex flex-col gap-3">
            <Button bg="main" type="submit">
              Login now
            </Button>
            <ButtonLight bg="main-light" type="button">
              <span className="flex justify-center items-center gap-1">
                <FcGoogle /> Login now
              </span>
            </ButtonLight>
          </div>
        </form>
        <div className="text-grey-light">
          Don't have an account ?{' '}
          <button
            onClick={() => {
              navigate('/signup');
            }}
            className="text-main"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
