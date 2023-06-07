import React from 'react';
// import bcaa from "../../assets/png/bcaa.png"
// import star from "../../assets/star.svg"
// import cart from "../../assets/cart.svg"
// import heartLike from "../../assets/heartLike.svg"
// import expand from "../../assets/expand.svg"
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { RateProductButton } from './RateProductButton';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#FFC850' : '#FFDC64',
  },
}));

function ReviewProgressBar(props) {
  const { category, nbReviews, totalReviews } = props;

  return (
    <div className="flex items-center my-[2%]">
      {/* <h1 className="w-24 pr-2">{category} star:</h1> */}
      <h1 className=" text-xs w-[2%] mr-[2%] text-text-gray2">{category} </h1>
      <div className=" w-[85%]">
        <BorderLinearProgress
          variant="determinate"
          value={(nbReviews * 100) / totalReviews}
          className="w-[100%]"
        />
      </div>
      <h1 className="text-xs text-text-gray w-[1%] ml-[2%]">({nbReviews})</h1>
    </div>
  );
}

export const ReviewPreview = ({ product }) => {
  const totalReviews = 100;
  const reviews = [
    { category: '5', nbReviews: 63 },
    { category: '4', nbReviews: 15 },
    { category: '3', nbReviews: 10 },
    { category: '2', nbReviews: 5 },
    { category: '1', nbReviews: 7 },
  ];
  const averageReviews =
    (5 * reviews[0].nbReviews +
      4 * reviews[1].nbReviews +
      3 * reviews[2].nbReviews +
      2 * reviews[3].nbReviews +
      reviews[4].nbReviews) /
    totalReviews;
  return (
    <div className="bg-card-gray border-card-stroke rounded-md w-[25%] flex flex-col justify-between p-[1%] items-center mr-[1%]">
      <div className="flex flex-col justify-between items-center my-[8%]">
        <h1 className="text-text-black text-5xl font-normal mb-[8%]">
          {averageReviews.toFixed(1)}
        </h1>
        <Rating
          name="half-rating"
          defaultValue={averageReviews}
          precision={0.2}
          size="large"
          readOnly
          className="mb-[5%]"
        />
        <h1 className="">Overall {totalReviews} Review</h1>
      </div>
      <div className="bg-white flex flex-col rounded-md w-[90%] p-[5%]">
        {reviews.map((review) => (
          <ReviewProgressBar
            key={review.category}
            category={review.category}
            nbReviews={review.nbReviews}
            totalReviews={totalReviews}
          />
        ))}
      </div>
      <RateProductButton product={product} />
    </div>
  );
};
