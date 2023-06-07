import React from 'react';
const description =
  'BCAA (Branched Chain Amino Acids) is a popular sports supplement used by athletes and fitness enthusiasts to improve performance, enhance muscle growth, and speed up recovery after exercise. BCAA supplements typically contain three essential amino acids - leucine, isoleucine, and valine - which are known to support muscle protein synthesis and prevent muscle breakdown.';
const overview =
  'Our BCAA supplement is made with high-quality ingredients to help you achieve your fitness goals. With a perfect 2:1:1 ratio of leucine, isoleucine, and valine, this supplement provides an optimal dose of essential amino acids for maximum benefits. It`s ideal for athletes and gym-goers who want to build muscle, increase endurance, and reduce fatigue. Our BCAA supplement is available in a delicious watermelon flavor that makes it easy to incorporate into your pre or post-workout routine.';
const features = [
  'Optimal 2:1:1 ratio of leucine, isoleucine, and valine for maximum benefits.',
  'Supports muscle protein synthesis and prevents muscle breakdown.',
  'Improves endurance and reduces fatigue.',
  "Delicious watermelon flavor that's easy to mix and drink.",
  'Made with high-quality ingredients to ensure purity and potency.',
];
const specifications = [
  '5 grams of BCAAs per serving',
  '2:1:1 ratio of leucine, isoleucine, and valine',
  'No artificial colors, flavors, or sweeteners',
  'Vegan-friendly',
  'Gluten-free',
];
const howToUse =
  'To use the BCAA supplement, mix one scoop of powder with 8-10 ounces of water or your favorite beverage. You can consume it during or after exercise to support muscle recovery and growth. It can also be taken throughout the day to boost your amino acid intake and reduce muscle breakdown.';
const caution =
  "Before using the BCAA supplement, it's important to consult your physician if you are pregnant, nursing, or have a medical condition. Do not exceed the recommended dosage, and keep the product out of reach of children. Store it in a cool, dry place. This product is not intended to diagnose, treat, cure, or prevent any disease.";

import { reviews } from '../../data/data';
import checkMark2 from '../../assets/checkMark2.svg';
import { Rating, TextField } from '@mui/material';

const revs = [
  reviews[reviews.length - 1],
  reviews[reviews.length - 2],
  reviews[reviews.length - 3],
  reviews[reviews.length - 4],
  reviews[reviews.length - 5],
];
const MoreDetails = ({ product }) => {
  const [dActive, setdActive] = React.useState(true);

  const [sActive, setsActive] = React.useState(false);
  const [rActive, setrActive] = React.useState(false);
  const [hActive, sethActive] = React.useState(false);

  const handleDClick = () => {
    setdActive(true);
    setsActive(false);
    setrActive(false);
    sethActive(false);
  };

  const handleSClick = () => {
    setdActive(false);
    setsActive(true);
    setrActive(false);
    sethActive(false);
  };

  const handleRClick = () => {
    setdActive(false);
    setsActive(false);
    setrActive(true);
    sethActive(false);
  };
  const handleHClick = () => {
    setdActive(false);
    setsActive(false);
    setrActive(false);
    sethActive(true);
  };

  return (
    <div className="flex flex-col w-[60%] text-text-black font-poppinsRegular ml-[1%]">
      <div className=" flex flex-row items-center justify-start w-[90%] gap-[5%] mb-[2%]">
        <button
          onClick={handleDClick}
          className={
            dActive
              ? 'text-xl py-[1%] w-[20%] bg-primary text-white font-normal rounded-md shadow'
              : 'text-xl py-[1%] w-[20%] bg-dragos-input text-text-gray2 font-normal rounded-md hover:bg-primary hover:bg-opacity-50  active:bg-primary shadow hover:shadow-lg outline-none focus:outline-none ease-linear transit transition-all duration-50'
          }
        >
          Description
        </button>
        <button
          onClick={handleSClick}
          className={
            sActive
              ? 'text-xl py-[1%] w-[20%] bg-primary text-white font-normal rounded-md shadow'
              : 'text-xl py-[1%] w-[20%] bg-dragos-input text-text-gray2 font-normal rounded-md hover:bg-primary hover:bg-opacity-50  active:bg-primary shadow hover:shadow-lg outline-none focus:outline-none ease-linear transit transition-all duration-50'
          }
        >
          Specifications
        </button>
        <button
          onClick={handleRClick}
          className={
            rActive
              ? 'text-xl py-[1%] w-[20%] bg-primary text-white font-normal rounded-md shadow'
              : 'text-xl py-[1%] w-[20%] bg-dragos-input text-text-gray2 font-normal rounded-md hover:bg-primary hover:bg-opacity-50  active:bg-primary shadow hover:shadow-lg outline-none focus:outline-none ease-linear transit transition-all duration-50'
          }
        >
          Reviews
        </button>
      </div>
      {/* DESCRIPTION */}
      {dActive ? (
        <div className="text-text-gray">
          <p className="mb-[4%] leading-7">{product?.discription}</p>
          <h1 className="text-text-black text-3xl mb-[1%]">Overview</h1>
          <p className="mb-[4%] leading-7 ">{product?.overview}</p>
          <h1 className="text-text-black text-3xl mb-[1%]">Features</h1>
          <div className="flex flex-col leading-10  w-[90%] ml-[2%]">
            {product?.features.map((item) => (
              <div className="flex gap-2">
                <img src={checkMark2} alt="O" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {/* SPECIFICATIONS */}
      {sActive ? (
        <div className="text-text-gray mt-[3%] mb-[5%]">
          <h1 className="text-text-black text-3xl mb-[1%]">Specifications</h1>
          <div className="flex flex-col leading-10 w-[90%] ml-[2%] mb-[4%]">
            {specifications.map((item, index) => (
              <div className="flex gap-2">
                <img src={checkMark2} alt="O" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <h1 className="text-text-black text-3xl mb-[1%]">How to use</h1>
          <p className="mb-[4%] leading-7 ">{product?.howToUse[0]}</p>
          <h1 className="text-text-black text-3xl mb-[1%]">Cautions</h1>

          <p className="leading-7 ">{product?.caution}</p>
        </div>
      ) : (
        <div></div>
      )}

      {/* REVIEWS */}
      {rActive ? (
        <div className=" text-text-gray2  w-80 mt-[3%] mb-[5%] flex flex-col items-center">
          {product?.reviews
            .slice(1, 6)
            .map(({ name, review, rating, image }, index) => (
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-8">
                  <img src={image} alt="s" />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-text-black">{name}</h1>
                    <div className="flex flex-row gap-3 items-center">
                      <Rating
                        name="half-rating"
                        value={+rating}
                        precision={0.2}
                        size="small"
                        readOnly
                        className=""
                      />
                      <h1 className=" text-text-gray font-thin">
                        {rating} Rating
                      </h1>
                    </div>
                  </div>
                </div>

                <div className=" text-text-gray font-thin">{review}</div>
                <hr class="w-[100 h-[100%] mx-auto border-3 rounded my-[2%]"></hr>
              </div>
            ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MoreDetails;
