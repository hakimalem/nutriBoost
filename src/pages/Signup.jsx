import React, { useEffect, useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

import { Button, ButtonLight } from '../components/form/auth/Button';
import { Input } from '../components/form/auth/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

const USER_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

export const Signup = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  const [fullName, setFullName] = useState('');

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    } else if (!fullName) {
      setErrMsg('you should enter your name');
    }
    try {
      const response = await axios.post(
        '/api/auth/signup',
        JSON.stringify({ email: user, password: pwd, name: fullName }),
        {
          headers: { 'Content-Type': 'application/json' },
          // withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser('');
      setPwd('');
      setMatchPwd('');
      setFullName('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current?.focus();
      console.log(errMsg);
    }
  };
  return (
    <div className="h-screen flex ">
      {success ? (
        <div>
          <h1>Account created</h1>
          <Link to="/login"></Link>
        </div>
      ) : (
        <>
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
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="fullname" className="text-grey text-sm">
                    Fullname
                  </label>
                  <Input
                    id="fullname"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    placeholder="Ex: Mohamed Bedjaoui"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" required className="text-grey text-sm">
                    Email:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validName ? 'valid text-primary' : 'hidden'}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validName || !user ? 'hidden' : 'invalid text-red-600'
                      }
                    />
                  </label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="markzuckerberg@gmail.com"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    aria-invalid={validName ? 'false' : 'true'}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  {userFocus && user && !validName && (
                    <p id="uidnote" className="text-xs text-red-600">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      enter a valid email
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="date" className="text-grey text-sm">
                    Date of birth
                  </label>
                  <Input id="date" placeholder="dd/mm/yyyy" />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="text-grey text-sm">
                    Password :
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={validPwd ? 'valid text-primary' : 'hidden'}
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validPwd || !pwd ? 'hidden' : 'invalid text-red-600'
                      }
                    />
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    autoComplete={false}
                    required
                    aria-invalid={validPwd ? 'false' : 'true'}
                    aria-describedby="pwdnote"
                    onFocus={() => setPwdFocus(true)}
                    onBlur={() => setPwdFocus(false)}
                  />
                  {pwdFocus && !validPwd && (
                    <p id="pwdnote" className="text-xs text-red-600">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 characters.
                      <br />
                      Must include uppercase and lowercase letters, a number and
                      a special character.
                      <br />
                      Allowed special characters:{' '}
                      <span aria-label="exclamation mark">!</span>{' '}
                      <span aria-label="at symbol">@</span>{' '}
                      <span aria-label="hashtag">#</span>{' '}
                      <span aria-label="dollar sign">$</span>{' '}
                      <span aria-label="percent">%</span>
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="cpassword" className="text-grey text-sm">
                    Confirm password:
                    <FontAwesomeIcon
                      icon={faCheck}
                      className={
                        validMatch && matchPwd ? 'valid text-primary' : 'hidden'
                      }
                    />
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={
                        validMatch || !matchPwd
                          ? 'hidden'
                          : 'invalid text-red-600'
                      }
                    />
                  </label>
                  <Input
                    type="password"
                    id="cpassword"
                    placeholder="Enter your password"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    aria-invalid={validMatch ? 'false' : 'true'}
                    aria-describedby="confirmnote"
                    onFocus={() => setMatchFocus(true)}
                    onBlur={() => setMatchFocus(false)}
                  />
                  {matchFocus && !validMatch && (
                    <p id="confirmnote" className="text-xs text-red-600">
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    disabled={
                      !validName || !validPwd || !validMatch ? true : false
                    }
                    bg="main"
                    type="submit"
                  >
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
        </>
      )}
    </div>
  );
};
