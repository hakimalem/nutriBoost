import React, { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useNavigate } from 'react-router-dom';

function PriceSlider() {
  const [values, setValues] = useState({ min: 50, max: 900 });
  const [minValue, setMinValue] = useState(50);
  const [maxValue, setMaxValue] = useState(900);
  const navigate = useNavigate();

  const handleOnChange = (values) => {
    setValues(values);
    setMinValue(values.min);
    setMaxValue(values.max);
    navigate(`/products/priceFilter?min=${minValue}&max=${maxValue}`);
  };

  const handleMinInputChange = (event) => {
    const min = Number(event.target.value);
    setMinValue(min);
    setValues({ ...values, min });
  };

  const handleMaxInputChange = (event) => {
    const max = Number(event.target.value);
    setMaxValue(max);
    setValues({ ...values, max });
  };

  return (
    <div className="mb-[10%]">
      <div className="flex justify-between mb-[8%] ">
        <div className="flex flex-col ml-[10%] justify-start w-[50%] ">
          <h1 className="text-text-gray">Min</h1>
          <input
            type="number"
            value={minValue}
            onChange={handleMinInputChange}
            className="w-[65%] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div className="flex flex-col mr-[10%] justify-start w-[50%]">
          <h1 className="text-text-gray">Max</h1>
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxInputChange}
            className="w-[65%] border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>
      <InputRange
        minValue={0}
        maxValue={5000}
        formatLabel={(value) => ``}
        value={values}
        onChange={handleOnChange}
        classNames={{
          //THIS IS THE CONTAINER OF THE INPUT-SLIDER
          inputRange: 'input-range w-[80%] flex ml-[10%] mr-[10%] mb-[10%]',
          labelContainer: 'input-range__label-container',
          slider:
            'input-range__slider bg-white w-5 h-5 border-4 flex border-green3 rounded-full',
          track:
            'input-range__track input-range__track--background h-3 flex items-center bg-white',
          activeTrack:
            'input-range__track input-range__track--active bg-green3 bg-opacity-30 h-3',
          disabledInputRange: 'input-range--disabled',
        }}
      />
    </div>
  );
}

export default PriceSlider;
