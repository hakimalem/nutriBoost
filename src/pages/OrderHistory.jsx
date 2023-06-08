import React, { useState } from "react";
import whatsapp from "../assets/images/whatsapp.png";
import insta from "../assets/images/insta.png";
import email from "../assets/images/email.png";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Card = ({ number, date, user, status, price }) => {
  return (
    <div className="flex h-20 justify-between items-center my-10 mx-14 py-10 px-10 rounded-lg overflow-hidden shadow-lg bg-gray-100">
      <h2 className="text-lg text-gray-700 font-bold mb-2 text-center">
        {number}
      </h2>
      <h2 className="text-lg text-gray-400 font-bold mb-2 text-center">
        {date}
      </h2>
      <h2 className="text-lg font-bold mb-2 text-center">{user}</h2>
      {status === "Not delivered" ? (
        <>
          <h2 className="text-lg text-red-600 font-bold mb-2 text-center">
            {status}
          </h2>
        </>
      ) : status === "Pending" ? (
        <>
          <h2 className="text-lg text-orange-600 font-bold mb-2 text-center">
            {status}
          </h2>
        </>
      ) : (
        <>
          <h2 className="text-lg text-green-600 font-bold mb-2 text-center">
            {status}
          </h2>
        </>
      )}

      <h2 className="text-lg text-blue-500 font-bold mb-2 mr-16 text-center">
        {price}
      </h2>
      {/* <p className="text-gray-600 text-sm text-center mb-4">{disc}</p> */}
    </div>
  );
};

// {
//   Outfitslist.map((item) => (
//     <OutfitElement
//       item={item}
//       top={item.top}
//       heart={item.heart}
//       commission={item.commission}
//       ventes={item.ventes}
//       produit={item.produit}
//     />
//   ));
// }

export const Orders = () => {
  const [orders = apiData, isLoading, error] = useFetch("/api/orders/all");

  console.log({ orders });

  return (
    <>
      <div className="mx-auto min-h-screen items-center px-18">
        <h1 className="text-4xl text-center font-bold mt-16 mb-20">
          Orders history
        </h1>
        {/* <div className="flex h-20 justify-between items-center my-10 mx-14 py-10 px-10 rounded-lg overflow-hidden shadow-lg bg-{#bdffc4}">
          <p className="text-black font-bold text-xl text-center">Order N°</p>
          <p className="text-black font-bold text-xl text-center">Date</p>
          <p className="text-black font-bold text-xl text-center">User</p>
          <p className="text-black font-bold text-xl text-center">Status</p>
          <p className="text-balck font-bold text-xl text-center">
            Total price
          </p>
        </div> */}
        <div className="row items-center justify-center w-full bg-gray-">
          <div className="row w-full justify-center">
            {orders?.map((item) => (
              <Card
                number={item._id}
                date={formatDate(new Date(item?.date))}
                user={item.user.name}
                status={item.status}
                price={item.total + "$"}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

const formatDate = (date) => {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join("-") +
    " " +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":")
  );
};

// 👇 2023-01-04 10:00:07
console.log(formatDate(new Date()));
