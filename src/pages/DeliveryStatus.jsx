import React, { useState } from "react";
import whatsapp from "../assets/images/whatsapp.png";
import insta from "../assets/images/insta.png";
import email from "../assets/images/email.png";

const Card = ({ title, disc, link, image }) => {
  const handleButtonClick = () => {
    window.location.href = { link };
  };

  return (
    <div className="flex-row w-full mx-10 py-3 rounded-lg overflow-hidden shadow-lg bg-gray-200">
      <div className="relative">
        <div className="rounded-full overflow-hidden h-20 w-20 mx-auto">
          <img
            src={image}
            alt="Profile"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-gray-600 text-sm text-center mb-4">{disc}</p>
        <div className="flex justify-center">
          <button
            className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleButtonClick}
          >
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export const ContactUS = () => {
  return (
    <>
      <div className="mx-auto flex- min-h-screen items-center px-32">
        <div className="flex-colomn justify-center mb-15">
          <h1 className="text-4xl text-center font-bold mt-16 mb-8">
            Contact us
          </h1>
          <p className="text-gray-600 text-xl text-center mb-10">
            Get in touch and let us know how we can help
          </p>
        </div>
        <div className="flex items-center justify-center w-full bg-gray-">
          <div className="flex w-full justify-center">
            <Card
              title={"Instagram"}
              image={insta}
              disc={"We'd love to talk about how we can work together"}
              link={"https://www.instagram.com/abdelali._.ichou/?hl=fr"}
            />
            <Card
              title={"Whatsapp"}
              image={whatsapp}
              disc={"We're here to help with any question or code"}
              link={"https://www.instagram.com/abdelali._.ichou/?hl=fr"}
            />
            <Card
              title={"E-mail"}
              image={email}
              disc={"We are so hapy to help you whenever you need"}
              link={"https://www.instagram.com/abdelali._.ichou/?hl=fr"}
            />
          </div>
        </div>
        <div className="flex-colomn justify-center mb-15">
          <h1 className="text-2xl text-center font-bold mt-20 mb-4">
            DRAGOS Team
          </h1>
          <p className="text-gray-600 text-xl text-center mb-10">
            We code the impossible !
          </p>
        </div>
      </div>
    </>
  );
};
