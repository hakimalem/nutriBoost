import React, { useState } from "react";
import whatsapp from "../assets/images/whatsapp.png";
import insta from "../assets/images/insta.png";
import email from "../assets/images/email.png";
import { Link } from "react-router-dom";

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
  return (
    <>
      <div className="mx-auto min-h-screen items-center px-28">
        <h1 className="text-4xl text-center font-bold mt-16 mb-20">
          Orders history
        </h1>
        <div className="flex h-20 justify-between items-center my-10 mx-14 py-10 px-10 rounded-lg overflow-hidden shadow-lg bg-{#bdffc4}">
          <p className="text-black font-bold text-xl text-center">Order N°</p>
          <p className="text-black font-bold text-xl text-center">Date</p>
          <p className="text-black font-bold text-xl text-center">User</p>
          <p className="text-black font-bold text-xl text-center">Status</p>
          <p className="text-balck font-bold text-xl text-center">
            Total price
          </p>
        </div>
        <div className="row items-center justify-center w-full bg-gray-">
          <div className="row w-full justify-center">
            <Card
              number={"1235 1235 7709"}
              date={"06-06-2023"}
              user={"Ichou Abdelali"}
              status={"Not delivered"}
              price={"3640$"}
            />
            <Card
              number={"1555 1235 4709"}
              date={"05-06-2023"}
              user={"Hakim Allem"}
              status={"Pending"}
              price={"450$"}
            />
            <Card
              number={"0003 7335 7109"}
              date={"04-06-2023"}
              user={"Fliti Nasro"}
              status={"Delivered"}
              price={"6000$"}
            />
            <Card
              number={"7644 5523 0133"}
              date={"03-06-2023"}
              user={"Zahdour Mustapha"}
              status={"Delivered"}
              price={"9000$"}
            />
            <Card
              number={"1235 1235 7709"}
              date={"02-06-2023"}
              user={"Chiheb Sakhraoui"}
              status={"Pending"}
              price={"30$"}
            />
            <Card
              number={"1200 0882 3567"}
              date={"01-06-2023"}
              user={"Ichou Abdelali"}
              status={"Not delivered"}
              price={"500$"}
            />
            <Card
              number={"8930 9992 2265"}
              date={"06-06-2023"}
              user={"Ichou Abdelali"}
              status={"Pending"}
              price={"930$"}
            />
          </div>
        </div>
      </div>
    </>
  );
};
