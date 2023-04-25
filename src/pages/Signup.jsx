import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonLight } from '../components/form/auth/Button';
import { Input } from '../components/form/auth/Input';

export const Signup = () => {
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    //code
  };
  return (
    <div className="h-screen flex ">
      <div className="bg-signup w-1/2 h-full">s</div>
      <div className="w-1/2">
        <div className="bg-[#fff] py-20 px-28 rounded-[20px] flex flex-col  gap-6   ">
          <div className="flex flex-col gap-2">
            <h2 className="text-[16px] text-[#5A5A5D]">New user ?</h2>
            <h1 className="text-[32px] font-medium">Create an account</h1>
          </div>
          <form
            action=""
            className="flex flex-col gap-3"
            onSubmit={submitHandler}
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="fullname" className="text-grey text-sm">
                Fullname
              </label>
              <Input id="fullname" placeholder="Ex: Mohamed Bedjaoui" />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-grey text-sm">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="markzuckerberg@gmail.com"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="date" className="text-grey text-sm">
                Date of birth
              </label>
              <Input id="date" placeholder="dd/mm/yyyy" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-grey text-sm">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cpassword" className="text-grey text-sm">
                Confirm password
              </label>
              <Input id="cpassword" placeholder="Enter your password" />
            </div>
            <div className="flex flex-col gap-3">
              <Button bg="main" type="submit">
                Create account
              </Button>
              <ButtonLight bg="main-light" type="button">
                <span className="flex justify-center items-center gap-1">
                  <FcGoogle />
                  Continue with Google
                </span>
              </ButtonLight>
            </div>
          </form>
          <div className="text-grey-light text-center">
            Already have an account ?
            <button
              onClick={() => {
                navigate('/');
              }}
              className="text-main"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
