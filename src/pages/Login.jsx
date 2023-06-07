import React, { useContext } from 'react';
import { Button, ButtonLight } from '../components/form/auth/Button';
import { Input } from '../components/form/auth/Input';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

import { useRef, useState, useEffect } from 'react';

import axios from 'axios';
import { useAuth } from '../hooks/useAuth';
const LOGIN_URL = '/api/auth/login';

export const Login = () => {
  const { setAuth, auth } = useAuth();
  // const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/auth/login',
        { email, password: pwd },
        {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true,
        }
      );
      // console.log('auttt   hhh : ', JSON.stringify(response?.data));
      // console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      const user = response?.data?.data;
      console.log(user);
      // console.log(response?.data.data);
      console.log({ token, user });
      // console.log({ user });

      setAuth({ token, user });
      localStorage.setItem('auth', JSON.stringify({ token, user }));
      console.log(JSON.parse(localStorage.getItem(auth)));

      setEmail('');
      setPwd('');
      navigate('/');
    } catch (err) {
      // if (!err?.response) {
      //   setErrMsg('No Server Response');
      // } else if (err.response?.status === 400) {
      //   setErrMsg('Missing Username or Password');
      // } else if (err.response?.status === 401) {
      //   setErrMsg('Unauthorized');
      // } else {
      //   setErrMsg('Login Failed');
      // }
      console.log(err);
      errRef.current?.focus();
    }
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
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-grey text-sm">
              Email
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-grey text-sm">
              Password
            </label>
            <Input
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
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
