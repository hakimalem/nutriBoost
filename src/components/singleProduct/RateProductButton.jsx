import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import { Rating, TextField } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { reviews } from '../../data/data';

import close from '../../assets/close.svg';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

const profile = reviews[0];

export const RateProductButton = ({ product }) => {
  const [ratingInput, setRatingInput] = React.useState(0);
  const [showModal, setShowModal] = React.useState(false);
  const [review, setReview] = useState('');
  const { auth } = useAuth();

  const addReview = () => {
    console.log(product);
    axios
      .post(
        '/api/products/rating/add',
        {
          product_id: product._id,
          review,
          rating: ratingInput,
        },
        {
          headers: {
            Authorization: 'Bearer ' + auth?.token, //the token is a variable which holds the token
            'Content-Type': 'application/json',
          },
        }
      )
      .then(() => {
        toast.success(`Review added successfully`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className=" text-lg py-[3%] my-[8%] w-[90%] bg-slate-400  rounded-md hover:bg-yellow-400  active:bg-yellow-200 text-white font-poppinsBold shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
      >
        Write Review
      </button>
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[40%] my-6 mx-auto max-w-3xl flex justify-center">
              {/*content*/}
              <div className=" border-0 rounded-xl w-[100%] shadow-lg relative flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between py-5 px-[4%] rounded-t">
                  <h3 className="text-3xl font-normal text-text-black">
                    Rate this product
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <img src={close} alt="c" />
                  </button>
                </div>
                {/*body*/}
                <div className="flex flex-col py-[5%] items-center justify-center ">
                  {/* PERSONAL INFOS */}
                  <div className="flex flex-row justify-center items-center gap-4 text-xl font-thin text-text-black w-[50%]">
                    <img
                      src={profile.image}
                      alt=""
                      className=" rounded-full w-20 h-20"
                    />
                    <div>
                      <h1>{profile.name}</h1>
                      <p className="text-text-gray text-sm w-[100%]">
                        Reviews are public and include your account
                        informations.
                      </p>
                    </div>
                  </div>
                  {/* STARS */}
                  <Rating
                    className="my-[2%]"
                    size="large"
                    name="simple-controlled"
                    value={ratingInput}
                    onChange={(event, newValue) => {
                      setRatingInput(newValue);
                    }}
                  />
                  {/* TEXTFIELDS */}
                  <div className="flex flex-row justify-between w-[70%] mb-[4%]">
                    <FormControl
                      fullWidth
                      sx={{ m: 1 }}
                      variant="standard"
                      className="flex flex-row justify-between w-[70%]"
                    >
                      <TextField
                        id="outlined-multiline-static"
                        label="Additional content"
                        multiline
                        rows={3}
                        defaultValue=""
                        onChange={(e) => setReview(e.target.value)}
                        value={review}
                      />
                    </FormControl>
                  </div>
                  {/* BUTTONS */}
                  <div className="w-[68%] gap-[7%] flex justify-between mb-[4%]">
                    <button
                      onClick={() => setShowModal(false)}
                      className="text-lg py-[1.5%] w-[50%] border border-text-gray bg-dragos-input text-text-gray2 font-normal rounded-md hover:bg-text-gray hover:text-white  active:bg-white shadow hover:shadow-lg outline-none focus:outline-none ease-linear transit transition-all duration-50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={addReview}
                      className="text-xl py-[1%] w-[50%] bg-primary text-white font-normal rounded-md hover:bg-green-400  active:bg-white active:text-text-gray shadow hover:shadow-lg outline-none focus:outline-none ease-linear transit transition-all duration-50"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

{
  /* <h1 className="text-4xl font-normal text-text-black">Rate Product</h1>
            <div className="flex flex-row gap-4 text-lg font-thin text-text-black w-[50%]">
                <img src={profile.image} alt="" className=" rounded-full w-16 h-16" />
                <div>
                    <h1>{profile.name}</h1>
                    <p className="text-text-gray text-sm w-[100%]">Reviews are public and include your account informations.</p>
                </div>
            </div>
            <Rating
                size="large"
                name="simple-controlled"
                value={ratingInput}
                onChange={(event, newValue) => {
                    setRatingInput(newValue);
                }}
            />
            <div className="flex flex-row justify-between w-[70%]">

                <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <TextField
                        className="w-[100%]"
                        id="outlined-multiline-static"
                        label="Write a review!"
                        multiline
                        rows={3}
                        defaultValue=""
                    />
                </FormControl>
            </div> */
}
